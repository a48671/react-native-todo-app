import { TextUI } from '../components/text.ui';
import { EnumColors } from '../enums/colors';
import React from 'react';
import { View, StyleSheet, Platform, ViewStyle } from 'react-native';

export const Navbar = (): JSX.Element => {
  return (
    <View
      style={{
        ...styles.wrapper,
        ...Platform.select<ViewStyle>({
          ios: styles.wrapperIOS,
          android: styles.wrapperAndroid
        })
      }}
    >
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
  },
  wrapperIOS: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: EnumColors.main
  },
  wrapperAndroid: {
    backgroundColor: EnumColors.main
  },
  title: {
    color: Platform.OS === 'android' ? 'white' : EnumColors.main,
    fontSize: 20,
    fontFamily: 'roboto-bold'
  }
})
