type TranslationKeyNames = keyof typeof TRANSLATION_KEY_NAMES;

export type Country = {
  imageUrl: CountryApiResponse["flags"]["png"];
  name: CountryApiResponse["name"]["common"];
} & Pick<CountryApiResponse, "area" | "capital" | "ccn3">;

export type CountrySelectAreaTypes = Country["area"];
type Translation = { official: string; common: string };
type ArrayTypes = { [index: number]: string };
type LanguageArrayTypes = { [language: string]: string };

export interface CountryApiResponse {
  name: {
    common: string;
    official: string;
    nativeName: Record<string, Translation>;
  };
  tld: [string];
  cca2: string;
  ccn3: string;
  cca3: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  currencies: Record<"string", { name: string; symbol: string }>;
  idd: {
    root: string;
    suffixes: [string];
  };
  capital: [string];
  altSpellings: ArrayTypes;
  region: string;
  subregion: string;
  languages: LanguageArrayTypes;
  translations: Record<TranslationKeyNames, Translation>;
  latlng: [number, number];
  landlocked: boolean;
  area: number;
  demonyms: Record<"eng", { f: string; m: string }>;
  flag: string;
  maps: {
    googleMaps: string;
    openStreetMaps: string;
  };
  population: number;
  car: {
    signs: [string];
    side: string;
  };
  timezones: [string];
  continents: [string];
  flags: {
    png: string;
    svg: string;
  };
  coatOfArms: Record<string, never>;
  startOfWeek: string;
  capitalInfo: Record<"latlng", [number, number]>;
  postalCode: {
    format: string;
    regex: string;
  };
}

const TRANSLATION_KEY_NAMES = {
  ara: "ara",
  bre: "bre",
  ces: "ces",
  cym: "cym",
  deu: "deu",
  est: "est",
  fin: "fin",
  fra: "fra",
  hrv: "hrv",
  hun: "hun",
  ita: "ita",
  jpn: "jpn",
  kor: "kor",
  nld: "nld",
  per: "per",
  pol: "pol",
  por: "por",
  rus: "rus",
  slk: "slk",
  spa: "spa",
  srp: "srp",
  swe: "swe",
  tur: "tur",
  urd: "urd",
  zho: "zho",
} as const;
