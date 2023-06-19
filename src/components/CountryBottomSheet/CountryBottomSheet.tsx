import React, {useRef, useState} from 'react';

import BottomSheet from '@gorhom/bottom-sheet';

import {View, useWindowDimensions, Text} from 'react-native';
import {
  CountryItem,
  DoubleCountryItem,
  SingleCountryItem,
  deviceLanguageCode,
} from '../../utils/countries';
import {CountryList} from '../CountryList/CountryList';
import {importTwoLanguages} from '../../utils/importTwoLanguages';
import {importSingleLanguage} from '../../utils/importSingleLanguage';

const SNAP_POINTS = ['10%', '100%'];

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

  const importCountries = async () => {
    if (deviceLanguageCode !== 'en') {
      await importTwoLanguages(setDefaultCountry, setCountries, setError);

      return;
    }

    importSingleLanguage(setDefaultCountry, setCountries, setError);
  };

  if (!deviceLanguageCode) {
    return null;
  }

  if (!countries) {
    importCountries();

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
