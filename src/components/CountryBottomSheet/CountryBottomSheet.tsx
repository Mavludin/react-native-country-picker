import React, {useRef, useState} from 'react';

import BottomSheet from '@gorhom/bottom-sheet';

import {View, useWindowDimensions, Text} from 'react-native';
import {
  CountryItem,
  countriesByLanguage,
  deviceLanguage,
} from '../../utils/countries';
import {CountryList} from '../CountryList/CountryList';
import {getCountry} from 'react-native-localize';

const SNAP_POINTS = ['10%', '100%'];

export const CountryBottomSheet = () => {
  const sheetRef = useRef<BottomSheet>(null);

  const {height: screenHeight} = useWindowDimensions();

  const [countries, setCountries] = useState<CountryItem[] | undefined>();
  const [defaultCountry, setDefaultCountry] = useState<CountryItem>();

  const [error, setError] = useState<string | null>(null);

  const importData = () =>
    countriesByLanguage[deviceLanguage]()
      .then(json => json.default as CountryItem[])
      .then(data => {
        setDefaultCountry(
          data?.find(country => country.alpha2 === getCountry()),
        );
        setCountries(data.filter(country => country.alpha2 !== getCountry()));
      })
      .catch(error => {
        console.error('Error importing data:', error);
        setError('Error importing data');
      });

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
