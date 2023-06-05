import React from 'react';
import {FlatList} from 'react-native';

import countryList from './../../utils/countryList.json';
import styled from 'styled-components/native';
import {AfIcon} from '../icons/Af';

type Country = {
  capital: string;
  code: string;
  continent: string;
  flag_1x1: string;
  flag_4x3: string;
  iso: boolean;
  name: string;
};

export const Countries = () => {
  return (
    <FlatList
      data={countryList.slice(0, 5)}
      renderItem={({item: country}) => (
        <Country>
          <AfIcon />
          <CountryName>{country.name}</CountryName>
        </Country>
      )}
      keyExtractor={country => country.code}
    />
  );
};

const Country = styled.View`
  flex-direction: row;
  align-items: center;
`;

const CountryName = styled.Text`
  font-size: 18px;

  margin-left: 10px;
`;
