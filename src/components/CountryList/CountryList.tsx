import {BottomSheetFlatList, BottomSheetTextInput} from '@gorhom/bottom-sheet';
import React, {useState} from 'react';
import {
  CountryItem,
  DoubleCountryItem,
  SingleCountryItem,
  deviceLanguageCode,
} from '../../utils/countries';
import {HeaderCountry} from '../HeaderCountry/HeaderCountry';
import {Country} from '../Country/Country';
import {StyleSheet} from 'react-native';
import {filterSingleLanguageList} from '../../utils/filterSingleLanguageList';
import {filterTwoLanguageList} from '../../utils/filterTwoLanguageList';

type Props = {
  countries: DoubleCountryItem | SingleCountryItem;
  defaultCountry?: CountryItem;
};

export const CountryList = ({countries, defaultCountry}: Props) => {
  const [selectedCountry, setSelectedCountry] = useState<
    CountryItem | undefined
  >();

  const [filteredList, setFilteredList] = useState<
    DoubleCountryItem | SingleCountryItem
  >();

  const onSelect = (item: CountryItem) => {
    setSelectedCountry(item);
  };

  const handleChange = (text: string) => {
    if (text.length < 1) {
      setFilteredList(undefined);

      return;
    }

    const lowerCasedInputText = text.toLowerCase();

    // If there is only the English language
    if (Array.isArray(countries)) {
      filterSingleLanguageList(text, countries, setFilteredList);

      return;
    }

    // If there are 2 languages
    const isEnglish = /[a-z]/gi.test(text);
    const deviceLanguageCountryList = [...countries?.[deviceLanguageCode]];

    // If user enters English characters
    if (isEnglish) {
      filterTwoLanguageList(
        lowerCasedInputText,
        countries,
        deviceLanguageCountryList,
        setFilteredList,
      );

      return;
    }

    // If user enters characters in the device language
    const filteredResult = deviceLanguageCountryList?.filter(country => {
      return country.name?.toLowerCase().includes(lowerCasedInputText);
    }, []);

    setFilteredList({
      ...countries,
      [deviceLanguageCode]: filteredResult,
    });
  };

  return (
    <>
      <BottomSheetTextInput
        onChangeText={handleChange}
        style={styles.input}
        placeholder="Search"
      />

      {Array.isArray(countries) ? (
        <BottomSheetFlatList
          data={filteredList ?? countries}
          ListHeaderComponent={
            filteredList ? null : (
              <HeaderCountry defaultCountry={defaultCountry} />
            )
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
      ) : (
        <BottomSheetFlatList
          data={
            filteredList?.[deviceLanguageCode] ??
            countries?.[deviceLanguageCode]
          }
          ListHeaderComponent={
            filteredList ? null : (
              <HeaderCountry defaultCountry={defaultCountry} />
            )
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
      )}
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
