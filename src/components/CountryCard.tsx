import type { CountryTypes } from "../types/countries";

type CountryCardProps = {
  country: CountryTypes;
  onClick: (area: string) => void;
  isHighlight: boolean;
};

const CountryCard = ({ country, onClick, isHighlight }: CountryCardProps) => {
  return (
    <button
      type="button"
      className={`border shadow-md hover:shadow-lg rounded-md text-center w-full p-4 ${
        isHighlight ? "border-green-500" : "border-white"
      }`}
      onClick={() => onClick(country.area)}
    >
      <div className="m-auto w-20 aspect-[4/3] shadow-md mb-6">
        <img src={country.imageUrl} className="w-full h-full object-cover" />
      </div>
      <strong className="text-lg">{country.name}</strong>
      <p>{country.capital}</p>
    </button>
  );
};

export default CountryCard;
