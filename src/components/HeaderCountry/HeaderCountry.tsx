import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {CountryFlag} from '../CountryFlag/CountryFlag';
import {CountryItem, countryFlags} from '../../utils/countries';

type Props = {
  selectedCountry?: CountryItem;
};

export const HeaderCountry = ({selectedCountry}: Props) => {
  return (
    <View style={styles.itemContainer}>
      <CountryFlag imgSrc={countryFlags[selectedCountry?.alpha2 || '']} />
      <Text style={styles.coutryName}>{selectedCountry?.name}</Text>
      <View style={styles.selectedTextContainer}>
        <Text style={styles.selectedText}>Selected</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
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
    paddingHorizontal: 10,
    paddingVertical: 2,
    marginLeft: 5,
  },
  selectedText: {
    fontSize: 12,
    fontWeight: '600',
    color: 'black',
  },
});
