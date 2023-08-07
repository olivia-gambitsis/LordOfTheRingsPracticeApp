import axios from "axios";
import { FC, useEffect, useState } from "react";
import { ICharacter } from "../helpers/types";
import { useLocation, useParams } from "react-router-dom";
import { CharacterDetailCard } from "../components/CharacterDetailCard";

interface ICharacterDetailPage {
  id: string;
}

export const CharacterDetailPage = () => {
  const [character, setCharacter] = useState<ICharacter>();
  const [isLoading, setIsLoading] = useState<Boolean>();
  let { id } = useParams();

  useEffect(() => {
    axios
      .get(
        `${import.meta.env.VITE_LOTR_API_URL}/character/${id}`,
        {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_LOTR_API_KEY}`,
            Accept: "application/json",
          },
        }
      )
      .then((res) => {
        setCharacter(res.data.docs[0]);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        console.error(err);
      });
  }, []);


  return (
    <div>{character && <CharacterDetailCard character={character} />}</div>
  );
};
