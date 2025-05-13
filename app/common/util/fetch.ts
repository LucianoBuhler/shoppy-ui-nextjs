import { cookies } from "next/headers";
import { API_URL } from "../constants/api";
import { getErrorMessage } from "./errors";

// const getHeaders = () => ({
//   Cookie: cookies().toString(),
// });

const getHeaders = async () => {
  const cookieStore = await cookies();
  const cookieString = cookieStore.toString();
  return {
    Cookie: cookieString,
  };
};

export const post = async (path: string, formData: FormData) => {
  const headersData = await getHeaders();
  console.log("[post] headersData: ", headersData);
  const res = await fetch(`${API_URL}/${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json", ...headersData },
    body: JSON.stringify(Object.fromEntries(formData)),
  });
  const parsedRes = await res.json();
  if (!res.ok) {
    return { error: getErrorMessage(parsedRes) };
  }
  return { error: "" };
};

export const get = async <T>(path: string, tags?: string[]) => {
  const headersData = await getHeaders();
  console.log("[get] headersData: ", headersData);
  const res = await fetch(`${API_URL}/${path}`, {
    headers: { ...headersData },
    next: { tags },
  });
  return res.json() as T;
};