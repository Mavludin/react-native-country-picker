import React, {useState} from 'react';

import countryList from '../../counties/ru/countries.json';
import styled from 'styled-components/native';
import {Flag} from '../Flag/Flag';
import {FlatList} from 'react-native';
import {getCountry} from 'react-native-localize';

type Country = {
  capital: string;
  code: string;
  continent: string;
  flag_1x1: string;
  flag_4x3: string;
  iso: boolean;
  name: string;
};

const defaultCountryCode = getCountry().toLocaleLowerCase();

export const Countries = () => {
  const [selectedCountry, setSelectedCountry] = useState(() => {
    return countryList.find(country => country.alpha2 === defaultCountryCode);
  });

  return (
    <>
      <Title>Выберите страну</Title>

      <Container>
        <FlatList
          data={[selectedCountry, ...countryList]}
          renderItem={({item: country}) => (
            <Country>
              <Flag />
              <CountryButton>
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
