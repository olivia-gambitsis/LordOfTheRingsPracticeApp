import { List, Title } from "@mantine/core";
import { RACES } from "../helpers/enums";
import { ICharacter } from "../helpers/types";
import { useCharacters } from "../helpers/useCharacters";
import { SmallCharacterCard } from "./SmallCharacterCard";
import { useCharacterStore } from "../store/characterStore";

interface ICharacterList{
  characterRace?: RACES;
  data?: ICharacter[]

}

export const CharacterList = ({characterRace, data}: ICharacterList ) => {
  const getOneCharacter = useCharacterStore((state) => state.fetchSpecificCharacter({}));

  const {characterList} = useCharacters()

  return (
    <div>
      <Title>Characters</Title>

      <div>
        {characterList.map((character) => 
          (<SmallCharacterCard race={character.race} name={character.name}/>)
        )}
      </div>

    </div>
  );
};
