import React from 'react';
import styled from 'styled-components/native';

import {Countries} from './components/Countries/Countries';

function App() {
  return (
    <AppContainer>
      <Countries />
    </AppContainer>
  );
}

const AppContainer = styled.View`
  padding-vertical: 20px;
`;

export default App;
