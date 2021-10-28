import { ScreenContext } from '../contexts/screen/screen.context';
import { Main } from '../screens/main';
import { ToDo } from '../screens/to-do';
import { Navbar } from '../components/navbar';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import React, { useContext } from 'react';

export const MainLayout = (): JSX.Element => {
  const { toDoId } = useContext(ScreenContext);

  return (
    <View style={styles.wrapper}>
      <Navbar />
      {toDoId ? <ToDo /> :<Main /> }
      {Platform.OS === 'android' && <StatusBar barStyle="light-content"/>}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  }
});
