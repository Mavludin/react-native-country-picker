import {BottomSheetFlatList, BottomSheetTextInput} from '@gorhom/bottom-sheet';
import React, {useState} from 'react';
import {HeaderCountry} from '../HeaderCountry/HeaderCountry';
import {Country} from '../Country/Country';
import {StyleSheet, View} from 'react-native';
import {filterSingleLanguageList} from '../../utils/filterSingleLanguageList';
import {SearchIcon} from '../SearchIcon/SearchIcon';
import {CountryItem} from '../../libs/world_countries/types';

type Props = {
  countries: CountryItem[];
  defaultCountry: CountryItem;
};

export const SingleLangCountryList = ({countries, defaultCountry}: Props) => {
  const [selectedCountry, setSelectedCountry] = useState<CountryItem | null>(
    null,
  );

  const [filteredList, setFilteredList] = useState<CountryItem[] | null>(null);

  const onSelect = (item: CountryItem) => {
    setSelectedCountry(item);
  };

  const handleChange = (text: string) => {
    if (text.length < 1) {
      setFilteredList(null);

      return;
    }
    const lowerCasedInputText = text.toLowerCase();

    // If there is only the English language
    filterSingleLanguageList(lowerCasedInputText, countries, setFilteredList);
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
