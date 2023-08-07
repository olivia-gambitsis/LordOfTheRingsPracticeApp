import { Input } from "@mantine/core";
import { Dispatch, SetStateAction } from "react";

interface ISearch {
  setSearchValue: Dispatch<SetStateAction<string>>
}

export const Search = ({ setSearchValue}: ISearch) => {

  const handleChange = (e: { target: { value: string } }) => {
    setSearchValue(e.target.value);
  };

  return (
    <div>
      <Input type="text" onChange={handleChange} placeholder="Search character name" />
  </div>
  );
};
