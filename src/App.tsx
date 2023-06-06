import React from 'react';
import styled from 'styled-components/native';

import {Countries} from './components/Countries/Countries';
import {SafeAreaView} from 'react-native';

function App() {
  return (
    <SafeAreaView>
      <AppContainer>
        <Countries />
      </AppContainer>
    </SafeAreaView>
  );
}

const AppContainer = styled.View`
  padding-vertical: 20px;
`;

export default App;
