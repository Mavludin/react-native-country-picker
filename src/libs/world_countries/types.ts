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

export type TwoLangCountryItem = Record<Partial<LanguageCode>, CountryItem[]>;
