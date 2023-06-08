import React, {useEffect, useMemo, useState} from 'react';

import styled from 'styled-components/native';
import {Flag} from '../Flag/Flag';
import {FlatList} from 'react-native';
import {getCountry} from 'react-native-localize';
import {
  CountryItem,
  countriesByLanguage,
  deviceLanguage,
  flags,
} from '../../utils/countries';

export const Countries = () => {
  const [selectedCountry, setSelectedCountry] = useState<
    CountryItem | undefined
  >();

  const [countries, setCountries] = useState<CountryItem[] | undefined>();

  const defaultCountry = useMemo(() => {
    if (!countries) return;

    return countries?.find(
      country => country.alpha2.toUpperCase() === getCountry(),
    );
  }, [countries]);

  const onSelect = (item: CountryItem) => {
    setSelectedCountry(item);
  };

  useEffect(() => {
    if (!deviceLanguage) {
      return;
    }

    countriesByLanguage[deviceLanguage]().then(data => {
      setCountries(data.default);
    });
  }, []);

  useEffect(() => {
    if (selectedCountry) return;

    setSelectedCountry(defaultCountry);
  }, [defaultCountry, selectedCountry]);

  return (
    <>
      <Title>Выберите страну</Title>

      <Container>
        <FlatList
          data={countries}
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
