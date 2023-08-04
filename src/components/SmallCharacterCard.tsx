import React from 'react'
import { RACES } from '../helpers/enums';

interface ISmallCharacterCard {
  name: string;
  race: string;

}

export const SmallCharacterCard =({name, race}: ISmallCharacterCard) =>{
  return (
    <div>
      <h5>{name}</h5>
      <p>{race}</p>
      <button>Learn more</button>
    </div>
  )
}