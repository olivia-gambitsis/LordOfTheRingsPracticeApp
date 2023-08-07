import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@mantine/core";
import React from "react";

export const LogoutButton = () => {
  const { logout } = useAuth0();
  return (
    <Button
      color="yellow.5"
      variant="outline"
      radius={'xl'}
      
      onClick={() =>
        logout({
          logoutParams: { returnTo: window.location.origin },
        })
      }
    >
      Log Out
    </Button>
  );
};
