import { TgUser } from "../types";

export function getTgUserFromInitData(initData: string): TgUser {
  const str = new URLSearchParams('?'+initData).get('user')!;
  return JSON.parse(str) as TgUser;
}