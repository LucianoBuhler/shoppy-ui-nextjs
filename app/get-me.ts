"use server";

import { get } from "./util/fetch";
// import { API_URL } from "./constants/api";
// import { cookies } from "next/headers";

export default async function getMe() {
  // const cookieStore = await cookies();
  // console.log(cookieStore.toString());
  // const me = await fetch(`${API_URL}/users/me`, {
  //   headers: { Cookie: cookieStore.toString() },
  // });
  // return me.json();
  return get('users/me');
}
