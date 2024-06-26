import { useQuery } from "@tanstack/react-query";
import { getCountries } from "../api/countries";

export const useGetCountries = () => {
  return useQuery({
    queryKey: ["countries"],
    queryFn: getCountries,
  });
};
