import {deviceLanguageCode} from './countries';

import {
  CountryItem,
  TwoLangCountryItem,
  LanguageCode,
} from '../libs/world_countries/types';

export const filterTwoLanguageList = (
  lowerCasedInputText: string,
  countries: Record<Partial<LanguageCode>, CountryItem[]>,
  deviceLanguageCountryList: any[],
  setFilteredList: (value: TwoLangCountryItem | null) => void,
) => {
  const englishCountryList = [...countries?.en];

  const result = englishCountryList?.filter(country => {
    return country.name?.toLowerCase().includes(lowerCasedInputText);
  }, []);

  const filteredResult = deviceLanguageCountryList?.filter(country => {
    return result?.some(item => item.alpha2 === country.alpha2);
  });

  setFilteredList({
    ...countries,
    [deviceLanguageCode]: filteredResult,
  });
};
