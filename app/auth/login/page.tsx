"use client";

import { Button, Link, Stack, TextField } from "@mui/material";
import NextLink from "next/link";
import { useFormState } from "react-dom";
import login from "./login";

const LoginPage = () => {
  const [state, formAction] = useFormState(login, { error: "" });
  return (
    <form action={formAction} className="w-full max-w-xs">
      <Stack spacing={2}>
        <TextField
          name="email"
          label="Email"
          variant="outlined"
          type="email"
          error={!!state.error}
          helperText={state.error}
        />
        <TextField
          name="password"
          label="Password"
          variant="outlined"
          type="password"
          error={!!state.error}
          helperText={state.error}
        />
        <Button type="submit" variant="contained">
          Login
        </Button>
        <Link component={NextLink} href="/auth/signup" className="self-center">
          Signup
        </Link>
      </Stack>
    </form>
  );
};
export default LoginPage;
