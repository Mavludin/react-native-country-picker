import {Text, View} from 'react-native';
import React from 'react';
import countries from './utils/countries.json';
import {AfIcon} from './Af';

function App() {
  return (
    <View>
      <Text>123</Text>
      {countries.slice(0, 5).map(country => {
        return (
          <View>
            <AfIcon />
            <Text>{country.name}</Text>
          </View>
        );
      })}
    </View>
  );
}

export default App;
