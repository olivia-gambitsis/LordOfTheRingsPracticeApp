import { Flex, Select, Title } from "@mantine/core";
import { ICharacter } from "../helpers/interfaces";
import { SmallCharacterCard } from "./SmallCharacterCard";
import { useEffect, useState } from "react";
import { Search } from "./Search";
import { useCharacters } from "../helpers/useCharacters";

interface ICharacterList {
  allCharacters: ICharacter[];
}

export const CharacterList = ({ allCharacters }: ICharacterList) => {
  const { dwarfCharacters, elfCharacters, humanCharacters, hobbitCharacters } =
    useCharacters(allCharacters);

  const [search, setSearchValue] = useState("");
  const [filterRace, setFilterRace] = useState<string>();
  const [characterListToDisplay, setCharacterListToDisplay] =
    useState<ICharacter[]>(allCharacters);

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
      setCharacterListToDisplay(allCharacters);
    }
  }, [filterRace]);

  return (
    <div>
      <Flex direction={"column"} align={"center"}>
        <Title order={1} pt={"lg"} pb={"xl"}>
          Characters
        </Title>
        <div className="character-list-container">
          <div className="character-list-filters">
            <Flex align={"end"} justify={"space-around"} wrap={"wrap"} gap="md">
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
              characterListToDisplay.map((character, key) => {
                if (
                  search == "" ||
                  character.name.toLowerCase().includes(search.toLowerCase())
                ) {
                  return <SmallCharacterCard character={character} key={character._id} />;
                }
              })}
          </Flex>
        </div>
      </Flex>
    </div>
  );
};
