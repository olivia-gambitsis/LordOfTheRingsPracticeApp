import { FC, useEffect, useState } from "react";
import { Button, List, Title } from "@mantine/core";
import { useCharacterStore } from "../store/characterStore";
import { ICharacter } from "../helpers/types"
import { RACES } from "../helpers/enums";
import { CharacterRaceButton } from "../components/buttons/CharacterRaceButton";
import { CharacterList } from "../components/CharacterList";

export const Home: FC = () => {



  return (
    <>
      <h1>Search for a character or </h1>

      <CharacterList/>

      
    </>
  );
};
