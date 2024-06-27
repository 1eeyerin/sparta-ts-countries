import type { CountryApiResponse } from "../types/countries";

const API_URL = "https://restcountries.com/v3.1/all";

export const getCountries = async (): Promise<CountryApiResponse[]> => {
  const response = await fetch(API_URL);
  return await response.json();
};
