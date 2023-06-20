import {CountryItem} from '../libs/world_countries/types';

export const filterSingleLanguageList = (
  lowerCasedInputText: string,
  countries: CountryItem[],
  setFilteredList: (value: CountryItem[] | null) => void,
) => {
  const result = [...countries].filter(country => {
    return country.name.toLowerCase().includes(lowerCasedInputText);
  });

  setFilteredList(result);
};
