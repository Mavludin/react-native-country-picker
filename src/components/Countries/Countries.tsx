import React, {useEffect, useMemo, useRef, useState} from 'react';

import BottomSheet, {BottomSheetFlatList} from '@gorhom/bottom-sheet';

import {Flag} from '../Flag/Flag';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
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
              <Text style={styles.coutryName}>{selectedCountry?.name}</Text>
              <View style={styles.selectedTextContainer}>
                <Text style={styles.selectedText}>selected</Text>
              </View>
            </View>
          }
          renderItem={({item: country}) => {
            const isActive = country.alpha2 === selectedCountry?.alpha2;
            return (
              <View
                style={
                  isActive ? styles.activeItemContainer : styles.itemContainer
                }>
                <Flag imgSrc={flags[country?.alpha2]} />
                <TouchableOpacity onPress={() => onSelect(country)}>
                  <Text style={styles.coutryName}>{country?.name}</Text>
                </TouchableOpacity>
              </View>
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
  container: {
    paddingTop: 200,
  },
  contentContainer: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
  },
  activeItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    backgroundColor: '#ECECEC',
  },
  coutryName: {
    fontSize: 22,
    padding: 5,
    fontWeight: '400',
    color: 'black',
    marginLeft: 10,
  },
  selectedTextContainer: {
    backgroundColor: '#D9D9D9',
    borderRadius: 20,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 2,
    paddingBottom: 2,
    marginLeft: 5,
  },
  selectedText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'black',
  },
});
