import { useQuery } from "@tanstack/react-query";
import { getCountries } from "../api/countries";

export const useGetCountries = () => {
  return useQuery({
    queryKey: ["countries"],
    queryFn: getCountries,
    select: (data: any) =>
      data.map((item: any) => ({
        area: item.area,
        imageUrl: item.flags.png,
        name: item.name.common,
        capital: item.capital,
        ccn3: item.ccn3,
      })),
  });
};
