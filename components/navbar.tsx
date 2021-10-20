import { EnumColors } from '../enums/colors';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const Navbar = (): JSX.Element => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>To do App</Text>
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
    fontSize: 20
  }
})
