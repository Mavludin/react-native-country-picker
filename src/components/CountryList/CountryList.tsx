import {BottomSheetFlatList, BottomSheetTextInput} from '@gorhom/bottom-sheet';
import React, {useState} from 'react';
import {CountryItem} from '../../utils/countries';
import {HeaderCountry} from '../HeaderCountry/HeaderCountry';
import {Country} from '../Country/Country';
import {StyleSheet} from 'react-native';

type Props = {
  countries: CountryItem[];
  defaultCountry?: CountryItem;
};

export const CountryList = ({countries, defaultCountry}: Props) => {
  const [selectedCountry, setSelectedCountry] = useState<
    CountryItem | undefined
  >();

  const onSelect = (item: CountryItem) => {
    setSelectedCountry(item);
  };

  return (
    <>
      <BottomSheetTextInput style={styles.input} placeholder="Search" />

      <BottomSheetFlatList
        data={countries}
        ListHeaderComponent={<HeaderCountry defaultCountry={defaultCountry} />}
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
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 15,
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
