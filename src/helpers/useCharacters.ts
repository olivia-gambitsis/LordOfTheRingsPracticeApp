import { ICharacter, RACES } from "./interfaces";
import { useState } from "react";

export const useCharacters = (characterList: ICharacter[]) => {

  const humanCharacters = () =>
    characterList.filter(
      (character: ICharacter) => character.race === RACES.Human
    );

  const dwarfCharacters = () =>
    characterList.filter(
      (character: ICharacter) => character.race === RACES.Dwarf
    );

  const elfCharacters = () =>
    characterList.filter(
      (character: ICharacter) => character.race === RACES.Elf
    );

  const hobbitCharacters = () =>
    characterList.filter(
      (character: ICharacter) => character.race === RACES.Hobbit
    );

  return {
    characterList,
    humanCharacters,
    dwarfCharacters,
    elfCharacters,
    hobbitCharacters,
  };
};
