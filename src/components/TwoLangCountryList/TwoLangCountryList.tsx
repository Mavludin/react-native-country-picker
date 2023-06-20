import {BottomSheetFlatList} from '@gorhom/bottom-sheet';
import React, {useCallback, useState} from 'react';
import {deviceLanguageCode} from '../../utils/countries';
import {HeaderCountry} from '../HeaderCountry/HeaderCountry';
import {Country} from '../Country/Country';
import {StyleSheet} from 'react-native';
import {filterTwoLanguageList} from '../../utils/filterTwoLanguageList';
import {CountryItem, DoubleCountryItem} from '../../libs/world_countries/types';
import {SearchInput} from '../SearchInput/SearchInput';

type Props = {
  countries: DoubleCountryItem;
  defaultCountry: CountryItem;
};

const TwoLangCountryListMemo = ({countries, defaultCountry}: Props) => {
  const [selectedCountry, setSelectedCountry] = useState<CountryItem | null>(
    null,
  );

  const [filteredList, setFilteredList] = useState<DoubleCountryItem | null>(
    null,
  );

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
    },
    [countries],
  );

  return (
    <>
      <SearchInput handleChange={handleInputChange} />
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
  contentContainer: {
    paddingHorizontal: 10,
  },
});

export const TwoLangCountryList = React.memo(TwoLangCountryListMemo);
