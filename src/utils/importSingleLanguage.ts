import {CountryItem, TwoLangCountryItem} from '../libs/world_countries/types';
import {
  countriesByLanguage,
  deviceCountryCode,
  deviceLanguageCode,
} from './countries';

export const importSingleLanguage = async (
  setDefaultCountry: (value?: CountryItem) => void,
  setCountries: (value?: TwoLangCountryItem | CountryItem[]) => void,
  setError: (value: string | null) => void,
) => {
  try {
    const json = await countriesByLanguage[deviceLanguageCode]();
    const data = json.default as CountryItem[];

    setDefaultCountry(
      data?.find(country => country.alpha2 === deviceCountryCode),
    );
    setCountries(data.filter(country => country.alpha2 !== deviceCountryCode));
  } catch (error) {
    console.error('Error importing data:', error);
    setError('Error importing data');
  }
};
