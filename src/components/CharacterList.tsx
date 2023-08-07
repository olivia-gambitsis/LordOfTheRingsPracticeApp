import { Flex, Loader, Select, Title } from "@mantine/core";
import { RACES } from "../helpers/enums";
import { ICharacter } from "../helpers/types";
import { SmallCharacterCard } from "./SmallCharacterCard";
import { useEffect, useState } from "react";

import { Search } from "./Search";
import { useCharacters } from "../helpers/useCharacters";

interface ICharacterList {
  characterRace?: RACES;
  data: ICharacter[];
}

export const CharacterList = ({ characterRace, data }: ICharacterList) => {
  const {
    characterList,
    dwarfCharacters,
    elfCharacters,
    humanCharacters,
    hobbitCharacters,
  } = useCharacters();

  const [search, setSearchValue] = useState("");
  const [filterRace, setFilterRace] = useState<string>();
  const [characterListToDisplay, setCharacterListToDisplay] =
    useState<ICharacter[]>(data);

  const isLoading = false;

  const selectChange = (value: string) => {
    setFilterRace(value);
  };

  useEffect(() => {
    if (filterRace === "Elves") {
      setCharacterListToDisplay(elfCharacters);
    } else if (filterRace === "Hobbits") {
      setCharacterListToDisplay(hobbitCharacters);
    } else if (filterRace === "Humans") {
      setCharacterListToDisplay(humanCharacters);
    } else if (filterRace === "Dwarfs") {
      setCharacterListToDisplay(dwarfCharacters);
    } else {
      setCharacterListToDisplay(data);
    }
  }, [filterRace]);

  return (
    <div>
      <Flex direction={"column"} align={"center"}>
        <Title order={1} pt={"lg"} pb={"xl"}>
          Characters
        </Title>
        {isLoading ? (
          <Loader />
        ) : (
          <div className="character-list-container">
            <div style={{ width: "100%", marginBottom: "20px" }}>
              <Flex align={"end"} justify={"space-around"} wrap={'wrap'} gap="md">
                <Select
                  label="Filter by race"
                  placeholder="Pick one"
                  data={["Elves", "Dwarfs", "Humans", "Hobbits", "All"]}
                  onChange={selectChange}
                  allowDeselect
                  color="yellow.5"
                />
                <Search setSearchValue={setSearchValue} />
              </Flex>
            </div>
            <Flex
              direction={{ base: "column", sm: "row" }}
              gap={{ base: "sm", sm: "lg" }}
              justify={{ sm: "center" }}
              wrap="wrap"
            >
              {characterListToDisplay &&
                characterListToDisplay.map((character) => {
                  if (
                    search == "" ||
                    character.name.toLowerCase().includes(search.toLowerCase())
                  ) {
                    return <SmallCharacterCard character={character} />;
                  }
                })}
            </Flex>
          </div>
        )}
      </Flex>
    </div>
  );
};
