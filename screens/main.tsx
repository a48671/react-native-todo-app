import { ScreenContext } from '../contexts/screen/screen.context';
import { TodoContext } from '../contexts/todo/todo.context';
import { AddToDo } from '../components/add-to-do';
import { ToDoList } from '../components/to-do-list';
import React, { useContext } from 'react';
import { StyleSheet, View, Image } from 'react-native';

export const Main = (): JSX.Element => {

  const { removeToDo, toDoList, addToDo } = useContext(TodoContext);
  const { setToDoId } = useContext(ScreenContext);

  let content = (
    <ToDoList list={toDoList} removeToDo={removeToDo} openToDo={setToDoId} />
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
