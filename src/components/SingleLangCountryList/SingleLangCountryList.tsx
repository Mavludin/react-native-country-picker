import {BottomSheetFlatList} from '@gorhom/bottom-sheet';
import React, {useCallback, useState} from 'react';
import {HeaderCountry} from '../HeaderCountry/HeaderCountry';
import {Country} from '../Country/Country';
import {StyleSheet} from 'react-native';
import {filterSingleLanguageList} from '../../utils/filterSingleLanguageList';
import {CountryItem} from '../../libs/world_countries/types';
import {SearchInput} from '../SearchInput/SearchInput';

type Props = {
  countries: CountryItem[];
  defaultCountry: CountryItem;
};

const SingleLangCountryListMemo = ({countries, defaultCountry}: Props) => {
  const [selectedCountry, setSelectedCountry] = useState<CountryItem | null>(
    null,
  );

  const [filteredList, setFilteredList] = useState<CountryItem[] | null>(null);

  const onSelect = (item: CountryItem) => {
    setSelectedCountry(item);
  };

  const handleInputChange = useCallback(
    (text: string) => {
      if (text.length < 1) {
        setFilteredList(null);

        return;
      }
      const lowerCasedInputText = text.toLowerCase();

      // If there is only the English language
      filterSingleLanguageList(lowerCasedInputText, countries, setFilteredList);
    },
    [countries],
  );

  return (
    <>
      <SearchInput handleChange={handleInputChange} />
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
  contentContainer: {
    paddingHorizontal: 10,
  },
});

export const SingleLangCountryList = React.memo(SingleLangCountryListMemo);
