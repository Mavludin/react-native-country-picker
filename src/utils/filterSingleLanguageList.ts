import {
  CountryItem,
  DoubleCountryItem,
  SingleCountryItem,
} from '../libs/world_countries/types';

export const filterSingleLanguageList = (
  lowerCasedInputText: string,
  countries: CountryItem[],
  setFilteredList: (value?: DoubleCountryItem | SingleCountryItem) => void,
) => {
  const result = [...countries].filter(country => {
    return country.name.toLowerCase().includes(lowerCasedInputText);
  });

  setFilteredList(result);
};
