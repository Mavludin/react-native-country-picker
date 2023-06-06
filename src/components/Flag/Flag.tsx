import React from 'react';
import styled from 'styled-components/native';

export const Flag = () => {
  return <FlagIcon source={require('../../assets/flags/16x16/af.png')} />;
};

const FlagIcon = styled.Image`
  width: 16px;
  height: 16px;
`;
