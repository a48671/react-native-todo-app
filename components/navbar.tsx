import { TextUI } from '../components/text.ui';
import { EnumColors } from '../enums/colors';
import React from 'react';
import { View, StyleSheet } from 'react-native';

export const Navbar = (): JSX.Element => {
  return (
    <View style={styles.wrapper}>
      <TextUI style={styles.title}>To do App</TextUI>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: 70,
    paddingBottom: 10,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: EnumColors.main
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'roboto-bold'
  }
})
