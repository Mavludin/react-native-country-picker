import React, {useEffect, useState} from 'react';

import countryList from '../../countries/ru/countries.json';
import styled from 'styled-components/native';
import {Flag} from '../Flag/Flag';
import {FlatList} from 'react-native';
import {getCountry, getLocales} from 'react-native-localize';
import {flags} from '../../utils/flags';

type Country = {
  id: number;
  alpha2: string;
  alpha3: string;
  name: string;
};

const defaultCountry = () => {
  return countryList.find(
    country => country.alpha2.toUpperCase() === getCountry(),
  );
};

const deviceLanguage = getLocales()[0].languageCode;

export const Countries = () => {
  const [selectedCountry, setSelectedCountry] = useState<Country | undefined>(
    defaultCountry,
  );

  const onSelect = (item?: Country) => {
    setSelectedCountry(item);
  };

  const [countries, setCountries] = useState<Country[] | null>(null);

  useEffect(() => {
    console.log('deviceLanguage', deviceLanguage);
    if (!deviceLanguage) {
      return;
    }

    const importCountries = async () => {
      try {
        if (deviceLanguage === 'en') {
          const data = await import('../../countries/en/countries.json');
          setCountries(data);
        } else if (deviceLanguage === 'ru') {
          const data = await import('../../countries/ru/countries.json');
          setCountries(data);
        } else if (deviceLanguage === 'es') {
          const data = await import('../../countries/es/countries.json');
          setCountries(data);
        }
      } catch (error) {
        console.error('Error importing countries:', error);
      }
    };

    importCountries();
  }, []);

  console.log(countries);

  if (!countries) {
    // Loading state
    return null;
  }

  return (
    <>
      <Title>Выберите страну</Title>

      <Container>
        <FlatList
          data={countryList}
          ListHeaderComponent={
            <Country>
              <Flag imgSrc={flags[selectedCountry?.alpha2 || '']} />
              <CountryName isBold>{selectedCountry?.name}</CountryName>
            </Country>
          }
          renderItem={({item: country}) => (
            <Country>
              <Flag imgSrc={flags[country?.alpha2]} />
              <CountryButton onPress={() => onSelect(country)}>
                <CountryName
                  isBold={selectedCountry?.alpha2 === country?.alpha2}>
                  {country?.name}
                </CountryName>
              </CountryButton>
            </Country>
          )}
          keyExtractor={country => country?.alpha2 || ''}
        />
      </Container>
    </>
  );
};

const Title = styled.Text`
  font-size: 30px;
  font-weight: 600;

  color: black;

  border-color: #ccc;
  border-width: 1px;

  margin-bottom: 15px;
  padding-bottom: 5px;
  padding-horizontal: 20px;
`;

const Container = styled.View`
  padding-horizontal: 20px;
`;

const Country = styled.View`
  flex-direction: row;
  align-items: center;

  margin-bottom: 5px;
`;

const CountryButton = styled.TouchableOpacity``;

const CountryName = styled.Text<{isBold?: boolean}>`
  font-size: 22px;

  font-weight: ${({isBold}) => (isBold ? '800' : 'normal')};

  margin-left: 10px;
`;
