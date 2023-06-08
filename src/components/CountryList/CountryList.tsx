import {BottomSheetFlatList} from '@gorhom/bottom-sheet';
import React, {useEffect, useMemo, useState} from 'react';
import {CountryItem} from '../../utils/countries';
import {HeaderCountry} from '../HeaderCountry/HeaderCountry';
import {Country} from '../Country/Country';
import {StyleSheet} from 'react-native';
import {getCountry} from 'react-native-localize';

type Props = {
  countries: CountryItem[];
};

export const CountryList = ({countries}: Props) => {
  const [selectedCountry, setSelectedCountry] = useState<
    CountryItem | undefined
  >();

  const onSelect = (item: CountryItem) => {
    setSelectedCountry(item);
  };

  const defaultCountry = useMemo(() => {
    if (!countries) return;

    return countries?.find(
      country => country.alpha2.toUpperCase() === getCountry(),
    );
  }, [countries]);

  useEffect(() => {
    if (selectedCountry) return;

    setSelectedCountry(defaultCountry);
  }, [defaultCountry, selectedCountry]);

  return (
    <BottomSheetFlatList
      data={countries}
      ListHeaderComponent={<HeaderCountry selectedCountry={selectedCountry} />}
      renderItem={({item: country}) => {
        const isActive = country.alpha2 === selectedCountry?.alpha2;
        return (
          <Country isActive={isActive} onSelect={onSelect} country={country} />
        );
      }}
      keyExtractor={country => country?.alpha2 || ''}
      contentContainerStyle={styles.contentContainer}
    />
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    paddingHorizontal: 10,
  },
});
