import {BottomSheetFlatList, BottomSheetTextInput} from '@gorhom/bottom-sheet';
import React, {useState} from 'react';
import {deviceLanguageCode} from '../../utils/countries';
import {HeaderCountry} from '../HeaderCountry/HeaderCountry';
import {Country} from '../Country/Country';
import {StyleSheet, View} from 'react-native';
import {filterTwoLanguageList} from '../../utils/filterTwoLanguageList';
import {SearchIcon} from '../SearchIcon/SearchIcon';
import {CountryItem, DoubleCountryItem} from '../../libs/world_countries/types';

type Props = {
  countries: DoubleCountryItem;
  defaultCountry: CountryItem;
};

export const TwoLangCountryList = ({countries, defaultCountry}: Props) => {
  const [selectedCountry, setSelectedCountry] = useState<CountryItem | null>(
    null,
  );

  const [filteredList, setFilteredList] = useState<DoubleCountryItem | null>(
    null,
  );

  const onSelect = (item: CountryItem) => {
    setSelectedCountry(item);
  };

  const handleChange = (text: string) => {
    if (text.length < 1) {
      setFilteredList(null);

      return;
    }

    const lowerCasedInputText = text.toLowerCase();

    // If there are 2 languages
    const isEnglish = /[a-z]/gi.test(text);
    const deviceLanguageCountryList = [...countries[deviceLanguageCode]];

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
    const filteredResult = deviceLanguageCountryList.filter(country => {
      return country.name.toLowerCase().includes(lowerCasedInputText);
    }, []);

    setFilteredList({
      ...countries,
      [deviceLanguageCode]: filteredResult,
    });
  };

  return (
    <>
      <View style={styles.searchContainer}>
        <SearchIcon />
        <BottomSheetTextInput
          onChangeText={handleChange}
          style={styles.input}
          placeholder="Search"
        />
      </View>

      <BottomSheetFlatList
        data={
          filteredList?.[deviceLanguageCode] ?? countries[deviceLanguageCode]
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
        keyExtractor={country => country.alpha2}
        contentContainerStyle={styles.contentContainer}
      />
    </>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: '#CBCBCB',
    borderBottomWidth: 1,
    paddingHorizontal: 15,
  },
  input: {
    fontSize: 20,
    lineHeight: 20,
    color: '#9A9A9A',
    marginLeft: 10,
  },
  contentContainer: {
    paddingHorizontal: 10,
  },
});
