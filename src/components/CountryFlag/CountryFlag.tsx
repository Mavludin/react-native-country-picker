import React from 'react';
import {Image, ImageSourcePropType, StyleSheet} from 'react-native';

type Props = {
  imgSrc?: ImageSourcePropType;
};

export const CountryFlag = ({
  imgSrc = require('../../assets/flags/16x16/ad.png'),
}: Props) => {
  return <Image style={styles.flagIcon} source={imgSrc} />;
};

const styles = StyleSheet.create({
  flagIcon: {
    width: 16,
    height: 16,
  },
});
