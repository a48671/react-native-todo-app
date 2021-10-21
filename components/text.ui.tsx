import React from 'react';
import { Text, StyleSheet, TextStyle } from 'react-native';

type TPropTypes = {
  style: TextStyle;
  children: string;
}

export const TextUI = ({ style, children }: TPropTypes): JSX.Element => {
  return (
    <Text style={{ ...styles.default, ...style }}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  default: {
    fontFamily: 'roboto-regular'
  }
});
