import {
  CountryItem,
  DoubleCountryItem,
  LanguageCode,
  SingleCountryItem,
  deviceLanguageCode,
} from './countries';

export const filterTwoLanguageList = (
  lowerCasedInputText: string,
  countries: Record<Partial<LanguageCode>, CountryItem[]>,
  deviceLanguageCountryList: any[],
  setFilteredList: (value?: DoubleCountryItem | SingleCountryItem) => void,
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
