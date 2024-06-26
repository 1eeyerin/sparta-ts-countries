import CountryCard from "./CountryCard";

const CountryList = ({
  countries,
  onClick,
  isHighlight = false,
}: {
  countries: any;
  isHighlight: boolean;
  onClick: (area: string) => void;
}) => {
  return (
    <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-16">
      {countries.map((country: any) => {
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
