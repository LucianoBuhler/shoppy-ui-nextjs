"use server";

import { cookies } from 'next/headers';
import { AUTHENTICATION_COOKIE } from '../auth-cookie';

export default async function getAuthentication() {
  const cookieStore = await cookies();
  const authCookie = cookieStore.get(AUTHENTICATION_COOKIE);
  return authCookie;
}