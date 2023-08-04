
export interface ICharacter {
  _id: string,
  height: string,
  race: string,
  gender: string,
  birth: string,
  spouse: string,
  death: string,
  realm: string,
  hair: string,
  name: string,
  wikiUrl: string

}

export interface ICharacterState {
  characters: ICharacter[];
  fetchAllCharacters: () => void;
  fetchSpecificCharacter: (id: string) => void;
  isLoading?: boolean;
}

export interface IAPIResponse {
  docs: ICharacter[];
  total: number;
}
