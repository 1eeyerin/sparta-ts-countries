import type { Country, CountrySelectAreaTypes } from "../types/countries";
import CountryCard from "./CountryCard";

type CountryListProps = {
  countries: Country[];
  onClick: (area: CountrySelectAreaTypes) => void;
  isHighlight?: boolean;
};

const CountryList = ({
  countries,
  onClick,
  isHighlight = false,
}: CountryListProps) => {
  return (
    <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-16">
      {countries.map((country: Country) => {
        return (
          <li key={`${country.area}${country.ccn3}`}>
            <CountryCard
              country={country}
              onClick={onClick}
              isHighlight={isHighlight}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default CountryList;
