export interface ICharacter {
  _id: string;
  height: string;
  race: string;
  gender: string;
  birth: string;
  spouse: string;
  death: string;
  realm: string;
  hair: string;
  name: string;
  wikiUrl: string;
}

export interface ICharacterQuote {
  _id: string;
  dialog: string;
  movie: string;
  character: string;
  id: string;
}

export enum RACES {
  Elf = "Elf",
  Dwarf = "Dwarf",
  Human = "Human",
  Hobbit = "Hobbit",
}

export interface ICharacterState {
  characters: ICharacter[];
  setCharacters: (characters: ICharacter[]) => void;
}
