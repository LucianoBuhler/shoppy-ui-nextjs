import { Button, Link, Stack, TextField } from "@mui/material";
import NextLink from "next/link";

export default function Signup() {
  return (
    <Stack spacing={2} className="w-full max-w-xs">
      <h1>Signup</h1>
      <p>Signup page</p>
      <TextField
        label="Email"
        variant="outlined"
        type="email"
        required
        autoComplete="email"
        autoFocus
        margin="normal" />
      <TextField
        label="Password"
        variant="outlined"
        type="password"
        required
        autoComplete="current-password"
        margin="normal" />
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
  )
}
