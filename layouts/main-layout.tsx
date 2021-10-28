import { ScreenContext } from '../contexts/screen/screen.context';
import { TodoContext } from '../contexts/todo/todo.context';
import { Main } from '../screens/main';
import { ToDo } from '../screens/to-do';
import { Navbar } from '../components/navbar';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import React, { useContext } from 'react';

export const MainLayout = (): JSX.Element => {
  const { saveToDo, removeToDo, toDoList, addToDo } = useContext(TodoContext);
  const { toDoId, setToDoId } = useContext(ScreenContext);

  let content: JSX.Element = <Main />;

  if (toDoId) {
    const toDo = toDoList.find(toDo => toDo.id === toDoId);
    function onRemove(): void {
      if (!toDo) return;
      const index = toDoList.indexOf(toDo);
      if (index < 0) return;
      removeToDo(index);
      setToDoId('');
    }

    content = (
      <ToDo
        toDo={toDo}
        goBack={setToDoId.bind(null, '')}
        onRemove={onRemove}
        save={saveToDo}
      />
    );
  }

  return (
    <View style={styles.wrapper}>
      <Navbar />
      {content}
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
