import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@mantine/core";

export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Button color="yellow.5" variant="filled" radius={""} onClick={() => loginWithRedirect()}>
      Log In
    </Button>
  );
};
