import {BottomSheetFlatList, BottomSheetTextInput} from '@gorhom/bottom-sheet';
import React, {useState} from 'react';
import {CountryItem, deviceLanguage} from '../../utils/countries';
import {HeaderCountry} from '../HeaderCountry/HeaderCountry';
import {Country} from '../Country/Country';
import {StyleSheet} from 'react-native';
import {
  DoubleCountryItem,
  SingleCountryItem,
} from '../CountryBottomSheet/CountryBottomSheet';

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
    if (text.length > 0) {
      if (Array.isArray(countries)) {
        const result = [...countries].filter(country => {
          return country.name.toLocaleLowerCase().includes(text.toLowerCase());
        });

        setFilteredList(result);
      } else {
        const isEnglish = /[a-z]/gi.test(text);

        if (isEnglish) {
          const deviceLanguageList = [...countries?.[deviceLanguage]];

          const englishList = [...countries?.en];

          const result = englishList?.filter(country => {
            return country.name
              ?.toLocaleLowerCase()
              .includes(text.toLowerCase());
          }, []);

          const result1 = deviceLanguageList?.filter(country => {
            return result?.some(item => item.alpha2 === country.alpha2);
          });

          console.log(result1);

          setFilteredList({
            ...countries,
            [deviceLanguage]: result1,
          });
        }
      }

      return;
    }

    setFilteredList(undefined);
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
          data={filteredList?.[deviceLanguage] ?? countries?.[deviceLanguage]}
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
