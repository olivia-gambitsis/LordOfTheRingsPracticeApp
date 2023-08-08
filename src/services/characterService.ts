import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://the-one-api.dev/v2",
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_LOTR_API_KEY}`,
    Accept: "application/json",
  },
});

export const getAllCharacters = async () => {
  const response = await apiClient.get("/character?limit=100");
  return response.data;
};

export const getCharacterByID = async (id: any) => {
  const response = await apiClient.get(`/character/${id}`);
  return response.data;
};

export const getCharacterQuote = async (id: any) => {
  const response = await apiClient.get(`/character/${id}/quote`);
  return response.data.docs;
};
