import { TToDoTypes } from '../types';
import { AddToDo } from '../components/add-to-do';
import { ToDoList } from '../components/to-do-list';
import React from 'react';
import { StyleSheet, View } from 'react-native';

type TPropTypes = {
  addToDo: (title: string) => void;
  toDoList: Array<TToDoTypes>;
  removeToDo: (index: number) => void;
  openToDo: (toDoId: string) => void;
};

export const Main = ({ addToDo, toDoList, removeToDo, openToDo }: TPropTypes): JSX.Element => {
  return (
    <View style={styles.wrapper}>
      <AddToDo addToDo={addToDo} />
      <ToDoList list={toDoList} removeToDo={removeToDo} openToDo={openToDo} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 10
  }
});
