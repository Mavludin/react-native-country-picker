import React from 'react';

import {Countries} from './components/Countries/Countries';
import {SafeAreaView, StyleSheet, View} from 'react-native';

function App() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Countries />
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
