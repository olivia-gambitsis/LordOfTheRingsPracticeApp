import { create } from 'zustand';
import { devtools, persist } from "zustand/middleware";
import axios from "axios";
import { IAPIResponse, ICharacterState } from '../helpers/types';


export const useCharacterStore = create<ICharacterState>()(
  devtools((set) => ({
      characters: [],
      fetchAllCharacters: async () => {
        set(() => ({ isLoading: true }));
        try {
          const response = await axios.get<IAPIResponse>(
            `${import.meta.env.VITE_LOTR_API_URL}/character?limit=100`,
            {
              headers: {
                'Authorization': `Bearer ${import.meta.env.VITE_LOTR_API_KEY}`,
                'Accept': 'application/json'
              },
            }
          );
          set((state) => ({ 
            characters: (state.characters = response.data.docs), 
            loading: false }));
        } catch (err) {
          console.error(err)
          set(() => ({ 
            hasErrors: true, 
            isLoading: false 
         }));
        }
      },
      fetchSpecificCharacter: async (id : string) => {
        set(() => ({ isLoading: true }));
        try {
          const response = await axios.get<IAPIResponse>(
            `${import.meta.env.VITE_LOTR_API_URL}/character/${id}`,
            {
              headers: {
                'Authorization': `Bearer ${import.meta.env.VITE_LOTR_API_KEY}`,
                'Accept': 'application/json'
              },
            }
          );
          set((state) => ({ 
            characters: (state.characters = response.data.docs), 
            loading: false }));
        } catch (err) {
          console.error(err)
          set(() => ({ 
            hasErrors: true, 
            isLoading: false 
         }));
        }
      },
    })
  )
)