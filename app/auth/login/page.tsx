"use client";

import { Button, Link, Stack, TextField } from "@mui/material";
import NextLink from "next/link";
import { useFormState } from "react-dom";
import login from "./login";

export default function Login() {
  const [state, formAction] = useFormState(login, {error: ""});

  return (
    <form action={formAction} className="w-full max-w-xs">
      <Stack spacing={2} >
        <h1>Login</h1>
        <p>Login page</p>
        <TextField
          label="Email"
          name="email"
          variant="outlined"
          type="email"
          required
          autoFocus
          helperText={state.error}
          error={!!state.error}/>
        <TextField
          label="Password"
          name="password"
          variant="outlined"
          type="password"
          required
          helperText={state.error} 
          error={!!state.error}/>
        <Button
          variant="contained"
          color="primary"
          type="submit">
            Login
        </Button>
        <Link component={NextLink} href="/auth/signup" className="self-center"> 
          Signup
        </Link>
      </Stack>
    </form>
  )
}
