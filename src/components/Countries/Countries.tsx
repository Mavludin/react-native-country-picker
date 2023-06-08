import React, {useEffect, useMemo, useRef, useState} from 'react';

import BottomSheet, {BottomSheetFlatList} from '@gorhom/bottom-sheet';

import styled from 'styled-components/native';
import {Flag} from '../Flag/Flag';
import {StyleSheet, View} from 'react-native';
import {getCountry} from 'react-native-localize';
import {
  CountryItem,
  countriesByLanguage,
  deviceLanguage,
  flags,
} from '../../utils/countries';

const snapPoints = ['25%', '50%', '90%'];

export const Countries = () => {
  const sheetRef = useRef<BottomSheet>(null);

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
      setCountries(data.default);
    });
  }, []);

  useEffect(() => {
    if (selectedCountry) return;

    setSelectedCountry(defaultCountry);
  }, [defaultCountry, selectedCountry]);

  return (
    <View style={styles.container}>
      <BottomSheet snapPoints={snapPoints} ref={sheetRef}>
        <BottomSheetFlatList
          data={countries}
          ListHeaderComponent={
            <View style={styles.itemContainer}>
              <Flag imgSrc={flags[selectedCountry?.alpha2 || '']} />
              <CountryName isBold>{selectedCountry?.name}</CountryName>
            </View>
          }
          renderItem={({item: country}) => (
            <View style={styles.itemContainer}>
              <Flag imgSrc={flags[country?.alpha2]} />
              <CountryButton onPress={() => onSelect(country)}>
                <CountryName
                  isBold={selectedCountry?.alpha2 === country?.alpha2}>
                  {country?.name}
                </CountryName>
              </CountryButton>
            </View>
          )}
          keyExtractor={country => country?.alpha2 || ''}
          contentContainerStyle={styles.contentContainer}
        />
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 200,
  },
  contentContainer: {
    backgroundColor: 'white',
  },
  itemContainer: {
    padding: 6,
    margin: 6,
    backgroundColor: '#eee',
  },
});

const CountryButton = styled.TouchableOpacity``;

const CountryName = styled.Text<{isBold?: boolean}>`
  font-size: 22px;

  font-weight: ${({isBold}) => (isBold ? '800' : 'normal')};

  margin-left: 10px;
`;
