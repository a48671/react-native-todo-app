import React from 'react';
import { View, StyleSheet, Button, ViewStyle } from 'react-native';

type TPropTypes = {
  children: JSX.Element;
  onPress?: VoidFunction;
  buttonText?: string;
  customStyles?: ViewStyle;
}

export const Card = ({ children, onPress, buttonText, customStyles = {} }: TPropTypes): JSX.Element => {

  let buttonElement: JSX.Element | null = null;

  if (onPress && buttonText) {
    buttonElement = <View><Button onPress={onPress} title={buttonText} /></View>
  }

  return (
    <View style={{ ...styles.wrapper, ...customStyles }}>
      <View style={styles.content}>
        {children}
      </View>
      {buttonElement}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: {
      width: 4,
      height: 4
    },
    shadowOpacity: .4,
    shadowRadius: 4,
    elevation: 2,
    width: '100%',
    borderRadius: 4,
    padding: 10,
    backgroundColor: 'white'
  },
  content: {
    flex: 1
  }
});
