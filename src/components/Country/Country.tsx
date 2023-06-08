import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {CountryItem, countryFlags} from '../../utils/countries';
import {CountryFlag} from '../CountryFlag/CountryFlag';

type Props = {
  isActive: boolean;
  country: CountryItem;
  onSelect: (item: CountryItem) => void;
};

export const Country = ({country, isActive, onSelect}: Props) => {
  return (
    <View style={isActive ? styles.activeItemContainer : styles.itemContainer}>
      <CountryFlag imgSrc={countryFlags[country?.alpha2]} />
      <TouchableOpacity onPress={() => onSelect(country)}>
        <Text style={styles.coutryName}>{country?.name}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
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
});
