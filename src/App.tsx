import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Container, MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";
import "./App.scss";
import NavBar from "./components/NavBar";
import { useCharacterStore } from "./store/characterStore";

export default function App() {
  const { pathname } = useLocation();
  const domain = import.meta.env.VITE_AUTH0_DOMAIN;
  const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
  const getCharacters = useCharacterStore((state) => state.fetchAllCharacters);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() =>{
    getCharacters()
  },[])

  return (
    <Auth0Provider
      clientId={clientId!}
      domain={domain!}
      authorizationParams={{
        redirect_uri:
          typeof window !== "undefined" ? window.location.origin! : "",
      }}
    >
      <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
         <NavBar />
          <Outlet />
      </MantineProvider>
    </Auth0Provider>
  );
}
