import { useQuery } from "@tanstack/react-query";
import { getCountries } from "../api/countries";
import { CountryApiResponse } from "../types/countries";

export const useGetCountries = () => {
  return useQuery({
    queryKey: ["countries"],
    queryFn: getCountries,
    select: (data: CountryApiResponse[]) =>
      data.map((item: CountryApiResponse) => ({
        area: item.area,
        imageUrl: item.flags.png,
        name: item.name.common,
        capital: item.capital,
        ccn3: item.ccn3,
      })),
  });
};
