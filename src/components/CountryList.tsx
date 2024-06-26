const CountryList = ({
  countries,
  onClick,
  isHighlight = false,
}: {
  countries: any;
  onClick: (area: string) => void;
}) => {
  return (
    <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-16">
      {countries.map((country: any) => {
        return (
          <li
            key={`${country.area}${country.ccn3}`}
            className={`border shadow-md hover:shadow-lg rounded-md text-center ${
              isHighlight ? "border-green-500" : "border-white"
            }`}
          >
            <button
              type="button"
              className="w-full p-4"
              onClick={() => onClick(country.area)}
            >
              <div className="m-auto w-20 aspect-[4/3] shadow-md mb-6">
                <img
                  src={country.flags.png}
                  alt={country.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <strong className="text-lg">{country.name.common}</strong>
              <p>{country.capital}</p>
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default CountryList;
