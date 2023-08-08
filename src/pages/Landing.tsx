import { FC } from "react";
import { Loader } from "@mantine/core";
import { useAuth0 } from "@auth0/auth0-react";
import { LoginButton } from "../components/buttons/LoginButton";
import { CharacterList } from "../components/CharacterList";
import { OneRingInscription } from "../components/Images";
import { useQuery } from "@tanstack/react-query";
import { getAllCharacters } from "../services/characterService";

export const LandingPage: FC = () => {
  const { isLoading: authIsLoading, isAuthenticated } = useAuth0();

  const { isLoading, data } = useQuery({
    queryKey: ["get-all-characters"],
    queryFn: async () => {
      return await getAllCharacters();
    },
  });

   if(authIsLoading){
    return  <Loader className="loader" color="yellow.5" />
   }

  return (
    <>
      {!isAuthenticated ? (
        <div className="landing-page">
          <div className="one-ring-inscription">
            <OneRingInscription />
          </div>
          <div className="info">
            <h3 className="text">Login to see lord of the rings characters</h3>
            <LoginButton />
          </div>
        </div>
      ) : isLoading ? (
        <Loader className="loader" color="yellow.5" />
      ) : (
        data && <CharacterList allCharacters={data?.docs} />
      )}
    </>
  );
};
