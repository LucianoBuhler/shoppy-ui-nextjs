"use client"

import { Button, Link, Stack, TextField } from "@mui/material";
import NextLink from "next/link";
import { useFormState } from "react-dom";
import createUser from "./create-user";

export default function Signup() {
  const [state, formAction] = useFormState(createUser, {error: ""})

  return (
    <form action={formAction} className="w-full max-w-xs">
      <Stack spacing={2}>
        <h1>Signup</h1>
        <p>Signup page</p>
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
            Signup
        </Button>
        <Link component={NextLink} href="/auth/login" className="self-center"> 
          Login
        </Link>
      </Stack>
    </form>
  )
}
