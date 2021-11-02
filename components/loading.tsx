import { EnumColors } from '../enums/colors';
import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';

export const Loading = (): JSX.Element => {
  return (
    <View style={styles.wrapper}>
      <ActivityIndicator size="large" color={EnumColors.main} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
