import { TToDoTypes } from '../types';
import { AddToDo } from '../components/add-to-do';
import { ToDoList } from '../components/to-do-list';
import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

type TPropTypes = {
  addToDo: (title: string) => void;
  toDoList: Array<TToDoTypes>;
  removeToDo: (index: number) => void;
  openToDo: (toDoId: string) => void;
};

export const Main = ({ addToDo, toDoList, removeToDo, openToDo }: TPropTypes): JSX.Element => {

  let content = (
    <ToDoList list={toDoList} removeToDo={removeToDo} openToDo={openToDo} />
  );

  if (!toDoList.length) {
    content = (
      <View style={styles.imageContainer}>
        <View style={styles.imageBlock}>
          <Image style={styles.image} source={require('../assets/img.png')} />
        </View>
      </View>
    );
  }

  return (
    <View style={styles.wrapper}>
      <AddToDo addToDo={addToDo} />
      {content}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 10,
    width: '100%'
  },
  imageContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageBlock: {
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain'
  }
});
