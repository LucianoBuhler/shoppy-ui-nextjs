import { Button, Link, Stack, TextField } from "@mui/material";
import NextLink from "next/link";

export default function Login() {
  return (
    <Stack spacing={2} className="w-full max-w-xs">
      <h1>Login</h1>
      <p>Login page</p>
      <TextField
        label="Email"
        variant="outlined"
        type="email"
        fullWidth
        required
        autoComplete="email"
        autoFocus
        margin="normal" />
      <TextField
        label="Password"
        variant="outlined"
        type="password"
        fullWidth
        required
        autoComplete="current-password"
        margin="normal" />
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
  )
}
