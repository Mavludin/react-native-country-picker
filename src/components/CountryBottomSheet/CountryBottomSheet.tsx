import React, {useCallback, useMemo, useRef, useState} from 'react';

import BottomSheet from '@gorhom/bottom-sheet';

import {View, useWindowDimensions, Text} from 'react-native';
import {deviceLanguageCode} from '../../utils/countries';
import {importTwoLanguages} from '../../utils/importTwoLanguages';
import {importSingleLanguage} from '../../utils/importSingleLanguage';
import {CountryItem, DoubleCountryItem} from '../../libs/world_countries/types';
import {SingleLangCountryList} from '../SingleLangCountryList/SingleLangCountryList';
import {TwoLangCountryList} from '../TwoLangCountryList/TwoLangCountryList';

const SNAP_POINTS = ['10%', '100%'];

export const CountryBottomSheet = () => {
  const sheetRef = useRef<BottomSheet>(null);

  const {height: screenHeight} = useWindowDimensions();

  const [countries, setCountries] = useState<
    DoubleCountryItem | CountryItem[]
  >();
  const [defaultCountry, setDefaultCountry] = useState<CountryItem>();

  const [error, setError] = useState<string | null>(null);

  const memoizedCountries = useMemo(() => countries, [countries]);

  const importCountries = useCallback(async () => {
    if (deviceLanguageCode !== 'en') {
      await importTwoLanguages(setDefaultCountry, setCountries, setError);

      return;
    }

    importSingleLanguage(setDefaultCountry, setCountries, setError);
  }, []);

  if (!deviceLanguageCode) {
    return null;
  }

  if (!memoizedCountries || !defaultCountry) {
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
        {Array.isArray(memoizedCountries) ? (
          <SingleLangCountryList
            countries={memoizedCountries}
            defaultCountry={defaultCountry}
          />
        ) : (
          <TwoLangCountryList
            countries={memoizedCountries}
            defaultCountry={defaultCountry}
          />
        )}
      </BottomSheet>
    </View>
  );
};
