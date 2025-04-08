"use server" ;

import { FormError } from "@/app/common/interfaces/form-error.interface";
import { redirect } from "next/navigation";
import { getErrorMessage } from "@/app/common/util/errors";
import { API_URL } from "@/app/common/constants/api";
import { cookies } from "next/headers";
// import { post } from "@/app/util/fetch";
import { jwtDecode } from "jwt-decode";
import { AUTHENTICATION_COOKIE } from "../auth-cookie";

export default async function login(_prevState: FormError, formData: FormData) {
  // const { error } = await post('auth/login', formData);
  const res = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",},
      body: JSON.stringify(Object.fromEntries(formData)),
    });
    const parsedRes = await res.json(); 
    if (!res.ok) {
      return { error: getErrorMessage(parsedRes) };
    }
    setAuthCookie(res);
    redirect("/");
}

const setAuthCookie = async (response: Response) => {
  const setCookieHeader = response.headers.get("Set-Cookie");
  if (setCookieHeader) {
    const token = setCookieHeader.split(";")[0].split("=")[1];
    const cookieStore = await cookies();
    cookieStore.set({
      name: AUTHENTICATION_COOKIE,
      value: token,
      secure: true,
      httpOnly: true,
      expires: new Date(jwtDecode(token).exp! * 1000),
    });
  }
}
