"use client";
import { Button, Link, Stack, TextField } from "@mui/material";
import NextLink from "next/link";
import { useFormState } from "react-dom";
import createUser from "./create-user";

const SignUpPage = () => {
  const [state, formAction] = useFormState(createUser, { error: "" });
  return (
    <form action={formAction} className="w-full max-w-xs">
      <Stack spacing={2}>
        <TextField
          name="email"
          label="Email"
          variant="outlined"
          type="email"
          helperText={state.error}
          error={!!state.error}
        />
        <TextField
          name="password"
          label="Email"
          variant="outlined"
          type="password"
          helperText={state.error}
          error={!!state.error}
        />
        <Button type="submit" variant="contained">
          Signup
        </Button>
        <Link component={NextLink} href="/auth/signup" className="self-center">
          Login
        </Link>
      </Stack>
    </form>
  );
};
export default SignUpPage;