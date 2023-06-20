export type LanguageCode =
  | 'ru'
  | 'es'
  | 'en'
  | 'cs'
  | 'de'
  | 'fr'
  | 'it'
  | 'ja'
  | 'ko'
  | 'pl'
  | 'pt'
  | 'uk';

export type CountryItem = {
  id: number;
  alpha2: string;
  alpha3: string;
  name: string;
};

export type DoubleCountryItem =
  | Record<Partial<LanguageCode>, CountryItem[]>
  | undefined;
export type SingleCountryItem = CountryItem[] | undefined;
