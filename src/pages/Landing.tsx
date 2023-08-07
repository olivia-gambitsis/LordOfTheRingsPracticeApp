import { FC, useEffect } from "react";
import { Center, Container, Flex, Title, createStyles } from "@mantine/core";
import { useAuth0 } from "@auth0/auth0-react";
import { LoginButton } from "../components/buttons/LoginButton";
import { CharacterList } from "../components/CharacterList";
import { useCharacterStore } from "../store/characterStore";
import { OneRingInscription } from "../components/Images";

const Login: FC = () => {
  const { user, isAuthenticated } = useAuth0();

  const characters = useCharacterStore((state) => state.characters);

  return (
    <>
      {!isAuthenticated ? (
        <div className="landing-page">
          <div className="one-ring-inscription">
            <OneRingInscription />
            <div className="one-ring-inscription info">
              <h3 className="text">Login to see lord of the rings characters</h3>
              <LoginButton />
            </div>
          </div>
        </div>
      ) : (
        <CharacterList data={characters} />
      )}
    </>
  );
};

export default Login;
