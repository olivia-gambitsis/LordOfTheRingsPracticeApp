import { FC, useState } from "react";
import { ICharacter } from "../helpers/interfaces";
import { useParams } from "react-router-dom";
import { CharacterDetailCard } from "../components/CharacterDetailCard";
import { useQuery } from "@tanstack/react-query";
import { getCharacterByID } from "../services/characterService";
import { Loader } from "@mantine/core";


export const CharacterDetailPage: FC = () => {
  const [character, setCharacter] = useState<ICharacter>();
  let { id } = useParams();

  const { isLoading, data } = useQuery({
    queryKey: ["query-character-by-id"],
    queryFn: async () => {
      return await getCharacterByID(id);
    },
    onSuccess: (res) => {
      setCharacter(res.docs[0]);
    },
  });


  return (
    <div>
      {isLoading && <Loader className="loader" color="yellow.5" />}
      <div>{character && <CharacterDetailCard character={character} />}</div>
    </div>
  );
};
