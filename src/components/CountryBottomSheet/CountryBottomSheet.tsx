import React, {useRef, useState} from 'react';

import BottomSheet from '@gorhom/bottom-sheet';

import {View, useWindowDimensions, Text} from 'react-native';
import {
  CountryItem,
  LanguageCode,
  countriesByLanguage,
  deviceLanguage,
} from '../../utils/countries';
import {CountryList} from '../CountryList/CountryList';
import {getCountry} from 'react-native-localize';

const SNAP_POINTS = ['10%', '100%'];

export type DoubleCountryItem =
  | Record<Partial<LanguageCode>, CountryItem[]>
  | undefined;
export type SingleCountryItem = CountryItem[] | undefined;

export const CountryBottomSheet = () => {
  const sheetRef = useRef<BottomSheet>(null);

  const {height: screenHeight} = useWindowDimensions();

  const [countries, setCountries] = useState<
    DoubleCountryItem | SingleCountryItem
  >();
  const [defaultCountry, setDefaultCountry] = useState<
    CountryItem | undefined
  >();

  const [error, setError] = useState<string | null>(null);

  const importData = async () => {
    if (deviceLanguage !== 'en') {
      try {
        const lang1 = await countriesByLanguage[deviceLanguage]();
        const lang2 = await countriesByLanguage.en();

        const data = {
          [deviceLanguage]: lang1.default,
          en: lang2.default,
        } as DoubleCountryItem;

        setDefaultCountry(
          data?.[deviceLanguage]?.find(
            country => country.alpha2 === getCountry(),
          ),
        );
        setCountries(data);
      } catch (error) {
        console.error('Error importing data:', error);
        setError('Error importing data');
      }
    } else {
      try {
        const json = await countriesByLanguage[deviceLanguage]();
        const data = json.default as CountryItem[];
        setDefaultCountry(
          data?.find(country => country.alpha2 === getCountry()),
        );
        setCountries(data.filter(country => country.alpha2 !== getCountry()));
      } catch (error) {
        console.error('Error importing data:', error);
        setError('Error importing data');
      }
    }
  };

  if (!deviceLanguage) {
    return null;
  }

  if (!countries) {
    importData();

    return null;
  }

  if (error) {
    <Text>{error}</Text>;
  }

  return (
    <View style={{paddingTop: screenHeight}}>
      <BottomSheet
        ref={sheetRef}
        snapPoints={SNAP_POINTS}
        keyboardBehavior="fillParent">
        <CountryList countries={countries} defaultCountry={defaultCountry} />
      </BottomSheet>
    </View>
  );
};
