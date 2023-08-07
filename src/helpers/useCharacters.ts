import { useEffect } from "react";
import { useCharacterStore } from "../store/characterStore";
import { ICharacter } from "./types";
import { RACES } from "./enums";


export function useCharacters() {
 
	const characterList : ICharacter[] = useCharacterStore((state) => state.characters)
 
  const humanCharacters = () => characterList.filter(character => character.race === RACES.Human)

  const dwarfCharacters = () => characterList.filter(character => character.race === RACES.Dwarf) 

  const elfCharacters = () => characterList.filter(character => character.race === RACES.Elf) 

  const hobbitCharacters = () => characterList.filter(character => character.race === RACES.Hobbit)


  return { 
    humanCharacters,
    dwarfCharacters,
    elfCharacters,
    hobbitCharacters,
    characterList
  };
}
