import React from 'react';
import styled from 'styled-components/native';

type Props = {
  imgSrc?: string;
};

export const Flag = ({
  imgSrc = require('../../assets/flags/16x16/ad.png'),
}: Props) => {
  return <FlagIcon source={imgSrc} />;
};

const FlagIcon = styled.Image`
  width: 16px;
  height: 16px;
`;
