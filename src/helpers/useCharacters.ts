import { useEffect } from "react";
import { useCharacterStore } from "../store/characterStore";
import { ICharacter } from "./types";
import { RACES } from "./enums";


export function useCharacters() {
 
  const getCharacters = useCharacterStore((state) => state.fetchAllCharacters);
  const getOneCharacter = useCharacterStore((state) => state.fetchSpecificCharacter);
	const characterList : ICharacter[] = useCharacterStore((state) => state.characters)

	useEffect(() => {
			getCharacters()
	}, [getCharacters])
 
  const findAllHumans = () => characterList.find(character => character.race === RACES.Human)

  const findAllDwarfs = () => characterList.find(character => character.race === RACES.Dwarf) 

  const findAllElves = () => characterList.find(character => character.race === RACES.Elf) 

  const findAllHobbits = () => characterList.find(character => character.race === RACES.Hobbit)


  return { 
    findAllHumans, 
    findAllDwarfs, 
    findAllElves, 
    findAllHobbits,
    characterList
  };
}
