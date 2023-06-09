import {CountryItem, TwoLangCountryItem} from '../libs/world_countries/types';
import {
  countriesByLanguage,
  deviceCountryCode,
  deviceLanguageCode,
} from './countries';

export const importTwoLanguages = async (
  setDefaultCountry: (value?: CountryItem) => void,
  setCountries: (value?: TwoLangCountryItem | CountryItem[]) => void,
  setError: (value: string | null) => void,
) => {
  try {
    const deviceLanguageCountryList = await countriesByLanguage[
      deviceLanguageCode
    ]();
    const englishCountryList = await countriesByLanguage.en();

    const result = {
      [deviceLanguageCode]: deviceLanguageCountryList.default,
      en: englishCountryList.default,
    } as TwoLangCountryItem;

    setDefaultCountry(
      result?.[deviceLanguageCode]?.find(
        country => country.alpha2 === deviceCountryCode,
      ),
    );
    setCountries(result);
  } catch (error) {
    console.error('Error importing countries:', error);
    setError('Error importing countries');
  }
};
