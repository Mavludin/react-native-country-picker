import React, {useRef, useState} from 'react';

import BottomSheet, {BottomSheetTextInput} from '@gorhom/bottom-sheet';

import {StyleSheet, View, useWindowDimensions, Text} from 'react-native';
import {
  CountryItem,
  countriesByLanguage,
  deviceLanguage,
} from '../../utils/countries';
import {CountryList} from '../CountryList/CountryList';

const SNAP_POINTS = ['10%', '100%'];

export const CountryBottomSheet = () => {
  const sheetRef = useRef<BottomSheet>(null);

  const {height: screenHeight} = useWindowDimensions();

  const [data, setData] = useState<CountryItem[] | null | undefined>(null);
  const [error, setError] = useState<string | null>(null);

  const importData = () =>
    countriesByLanguage[deviceLanguage]()
      .then(json => json.default)
      .then(setData)
      .catch(error => {
        console.error('Error importing data:', error);
        setError('Error importing data');
      });

  if (!deviceLanguage) {
    return null;
  }

  if (!data) {
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
        <BottomSheetTextInput style={styles.input} placeholder="Search" />
        <CountryList countries={data} />
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 20,
    fontSize: 20,
    lineHeight: 20,
    padding: 8,
    color: '#9A9A9A',
    borderBottomColor: '#CBCBCB',
    borderBottomWidth: 1,
  },
});
