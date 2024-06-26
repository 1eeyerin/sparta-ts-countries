import { useState } from "react";
import CountryList from "./components/CountryList";
import { useGetCountries } from "./queries/countries";
import type { CountryTypes } from "./types/countries";

const App = () => {
  const [selectedArea, setSelectedArea] = useState<string[]>([]);
  const { data: countries, isPending } = useGetCountries();

  const onClick = (area: string) => {
    setSelectedArea((prev) => {
      return prev.includes(area)
        ? prev.filter((item) => item !== area)
        : [...prev, area];
    });
  };

  const favoriteCountries = selectedArea
    .map((area) =>
      countries.find((country: CountryTypes) => country.area === area)
    )
    .filter(Boolean);

  const otherCountries = countries.filter(
    (country: CountryTypes) => !selectedArea.includes(country.area)
  );

  if (isPending) return null;

  return (
    <>
      <div className="text-center my-6">
        <strong className="text-2xl font-semibold mb-4">
          Favorite Countries
        </strong>
      </div>
      <CountryList
        countries={favoriteCountries}
        onClick={onClick}
        isHighlight
      />
      <div className="text-center my-6">
        <strong className="text-2xl font-semibold mb-4">Countries</strong>
      </div>
      <CountryList countries={otherCountries} onClick={onClick} />
    </>
  );
};

export default App;
