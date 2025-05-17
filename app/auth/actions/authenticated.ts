/***
 * This is a very simple server action.
   We're simply going to return cookies from next headers and try to get the authentication cookie
 * 
 */
import { cookies } from "next/headers";
import { AUTHENTICATION_COOKIE } from "../auth-cookie";
 
  export default async function authenticated() {
    const cookieStore = await cookies();
    return !!cookieStore.get(AUTHENTICATION_COOKIE)?.value;
  }