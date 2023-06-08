import React, {useEffect, useMemo, useRef, useState} from 'react';

import BottomSheet, {
  BottomSheetFlatList,
  BottomSheetTextInput,
} from '@gorhom/bottom-sheet';

import {StyleSheet, View, useWindowDimensions} from 'react-native';
import {getCountry} from 'react-native-localize';
import {
  CountryItem,
  countriesByLanguage,
  deviceLanguage,
} from '../../utils/countries';
import {Country} from '../Country/Country';
import {HeaderCountry} from '../HeaderCountry/HeaderCountry';

const SNAP_POINTS = ['10%', '100%'];

export const CountryBottomSheet = () => {
  const sheetRef = useRef<BottomSheet>(null);

  const {height: screenHeight} = useWindowDimensions();

  const [selectedCountry, setSelectedCountry] = useState<
    CountryItem | undefined
  >();

  const [countries, setCountries] = useState<CountryItem[] | undefined>();

  const defaultCountry = useMemo(() => {
    if (!countries) return;

    return countries?.find(
      country => country.alpha2.toUpperCase() === getCountry(),
    );
  }, [countries]);

  const onSelect = (item: CountryItem) => {
    setSelectedCountry(item);
  };

  useEffect(() => {
    if (!deviceLanguage) {
      return;
    }

    countriesByLanguage[deviceLanguage]().then(data => {
      setCountries(
        data.default.filter(
          country => country.alpha2.toUpperCase() !== getCountry(),
        ),
      );
    });
  }, []);

  useEffect(() => {
    if (selectedCountry) return;

    setSelectedCountry(defaultCountry);
  }, [defaultCountry, selectedCountry]);

  return (
    <View style={{paddingTop: screenHeight}}>
      <BottomSheet
        snapPoints={SNAP_POINTS}
        ref={sheetRef}
        keyboardBehavior="fillParent">
        <BottomSheetTextInput style={styles.input} placeholder="Search" />
        <BottomSheetFlatList
          data={countries}
          ListHeaderComponent={
            <HeaderCountry selectedCountry={selectedCountry} />
          }
          renderItem={({item: country}) => {
            const isActive = country.alpha2 === selectedCountry?.alpha2;
            return (
              <Country
                isActive={isActive}
                onSelect={onSelect}
                country={country}
              />
            );
          }}
          keyExtractor={country => country?.alpha2 || ''}
          contentContainerStyle={styles.contentContainer}
        />
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
  contentContainer: {
    paddingHorizontal: 10,
  },
});
