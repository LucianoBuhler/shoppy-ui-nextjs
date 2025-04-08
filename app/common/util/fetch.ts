import { API_URL } from "@/app/common/constants/api";
import { getErrorMessage } from "@/app/common/util/errors";
import { headers } from "next/headers";

// const getHeaders = () => ({
//   Cookie: cookies().toString()
// });

const getHeaders = async () => {
  const cookieHeader = await headers(); // Fetch headers asynchronously
  return {
    Cookie: cookieHeader.get('cookie')?.toString() || ''
  };
};

export const post = async (path: string, formData: FormData) => {
  const headers = await getHeaders();
  const res = await fetch(`${API_URL}/${path}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json", ...headers},
      body: JSON.stringify(Object.fromEntries(formData)),
    });
    const parsedRes = await res.json(); 
    if (!res.ok) {
      console.error(parsedRes);
      return { error: getErrorMessage(parsedRes) };
    }
    // return parsedRes;
    return { error: "" };
};

export const get = async (path: string) => {
  const headers = await getHeaders();
  const res = await fetch(`${API_URL}/${path}`, {
    // method: "GET",
    headers: { ...headers },
  });

  return res.json();
};
