import { TToDoTypes } from './types';
import { Navbar } from './components/navbar';
import React, { useCallback, useState } from 'react';
import { StyleSheet, View, StatusBar, Alert } from 'react-native';
import { Main } from './screens/main';
import { ToDo } from './screens/to-do';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

async function loadFonts() {
  await Font.loadAsync({
    'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf')
  });
}

export default function App() {

  const [isReady, setIsReady] = useState(false);
  const [toDoId, setToDoId] = useState<string>('');
  const [toDoList, setToDoList] = useState<Array<TToDoTypes>>([]);

  const addToDo = useCallback((title: string) => {
    setToDoList(toDoList => [...toDoList, { id: new Date().toString(), title }]);
  }, []);

  const removeToDo = useCallback((index: number) => {
    Alert.alert(
      'Remove task',
      `Do you want remove task ${toDoList[index]}`,
      [
        { style: 'cancel', text: 'Cancel' },
        {
          style: 'destructive',
          text: 'Remove',
          onPress: remove
        }
      ]
    );
    function remove() {
      setToDoList(list => [...list.slice(0, index), ...list.slice(index + 1)]);
      if (toDoId) {
        setToDoId('');
      }
    }
  }, [toDoList, toDoId]);

  if (!isReady) {
    return (
      <AppLoading
        startAsync={loadFonts}
        onError={console.error}
        onFinish={setIsReady.bind(null, true)}
      />
    )
  }

  let content: JSX.Element = (
    <Main addToDo={addToDo} removeToDo={removeToDo} toDoList={toDoList} openToDo={setToDoId}/>
  );

  if (toDoId) {
    const toDo = toDoList.find(toDo => toDo.id === toDoId);
    function onRemove(): void {
      if (!toDo) return;
      const index = toDoList.indexOf(toDo);
      if (index < 0) return;
      removeToDo(index);
    }
    function save(toDo: TToDoTypes): void {
      setToDoList(toDoList => toDoList.map(currentToDo => {
        if (toDo.id === currentToDo.id) {
          return toDo;
        }
        return currentToDo;
      }))
    }
    content = (
      <ToDo
        toDo={toDo}
        goBack={setToDoId.bind(null, '')}
        onRemove={onRemove}
        save={save}
      />
    );
  }

  return (
    <View style={styles.wrapper}>
      <Navbar />
      {content}
      <StatusBar barStyle="light-content" />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  }
});
