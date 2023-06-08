import React from 'react';

import {CountryBottomSheet} from './components/CountryBottomSheet/CountryBottomSheet';
import {SafeAreaView, StyleSheet, View} from 'react-native';

function App() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <CountryBottomSheet />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
  },
});

export default App;
