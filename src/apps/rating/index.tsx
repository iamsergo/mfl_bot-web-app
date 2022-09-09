import React from "react";
import api from "../../api";
import { Rating, TgUser } from "../../types";
import './styles.sass';

const LIMIT = 100;

type RatingAppProps = {
  tg: any;
  user: TgUser;
};

function RatingApp({}: RatingAppProps) {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [page, setPage] = React.useState(0);
  const [rating, setRating] = React.useState<Rating[]>([]);
  const [ended, setEnded] = React.useState(false);

  React.useEffect(() => {
    console.log('render', rating, page, loading);
    getRating({ limit: LIMIT, offset: 0 });
  }, []);

  async function getRating({limit, offset}: { limit: number, offset: number }) {
    setError(false);
    setLoading(true);
    try {
      const rating = await api.getRating({limit, offset});
      if(rating.length < LIMIT) setEnded(true);
      setRating(old => old.concat(rating));
      setPage(page => page + 1);
    } catch(err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div id="rating-app">
      {loading && page === 0 && <h2>Загрузка...</h2>}
      {rating.length === 0 && !loading && !error
        ? <h3>Рейтинг на данный момент пуст.</h3>
        : (
          <div className="rating-list">
              {rating.map(u => {
                let positionPrefix;
                if(+u.position === 1) positionPrefix = '🥇';
                else if(+u.position === 2) positionPrefix = '🥈';
                else if(+u.position === 3) positionPrefix = '🥉';
                else positionPrefix = `#${u.position} `;

                const username = u.username[0] === '_'
                  ? u.username.slice(1)
                  : `@${u.username}`;

                return <div key={u.username} className="rating-list-item">
                  <div className="rating-list-item__prefix">{positionPrefix}</div>
                  <div className="rating-list-item__username">{username}</div>
                  <div className="rating-list-item__points">{u.points}оч.</div>
                </div>
              })}
          </div>
        )
      }
      <div className="rating-footer">
        {error && <div className="loading-error">Произошла ошибка. Попробуйте ещё раз.</div>}
        {(((page === 0 && error) || page !== 0) && !ended) &&
          <div
            className={`more-btn${loading ? ' disabled' : ''}`}
            onClick={() => !loading && getRating({ limit: LIMIT, offset: page * LIMIT })}
          >
            {loading ? 'Загрузка...' : 'Заугрузить еще'}
          </div>
        }
      </div>
    </div>
  );
}

export default RatingApp;
