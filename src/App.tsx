import {Text} from 'react-native';
import React from 'react';
import countries from './utils/countries.json';
import {AfIcon} from './Af';
import styled from 'styled-components/native';

function App() {
  return (
    <AppContainer>
      {countries.slice(0, 5).map(country => {
        return (
          <Country>
            <AfIcon />
            <CountryName>{country.name}</CountryName>
          </Country>
        );
      })}
    </AppContainer>
  );
}

const AppContainer = styled.View`
  padding-horizontal: 20px;
  padding-vertical: 20px;
`;

const Country = styled.View`
  flex-direction: row;
  align-items: center;
`;

const CountryName = styled.Text`
  font-size: 18px;

  margin-left: 10px;
`;

export default App;
