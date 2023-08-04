import React, { FC } from "react";
import { RACES } from "../../helpers/enums";

interface ICharacterButton {
  race: RACES,
  onClick: (race:RACES) => void

}

export const CharacterRaceButton= ({race, onClick}: ICharacterButton) => {
  return <button onClick={() => onClick(race)}>{race}</button>;
};
