import { Alert } from 'react-native';
import { TToDo } from './todo.types';
import { TodoTypesEnum } from './todo-types.enum';
import { todoInitialState } from './todo.initial-state';
import { todoReducer } from './todo.reducer';
import { TodoContext } from './todo.context';
import React, { useCallback, useReducer } from 'react';

type TProps = {
  children: JSX.Element;
}

export function TodoContextWrapper({ children }: TProps): JSX.Element {
  const [state, dispatch] = useReducer(todoReducer, todoInitialState);

  const addToDo = useCallback((title: string) => {
    dispatch({ type: TodoTypesEnum.ADD_TODO, payload: title })
  }, [dispatch]);

  const removeToDo = useCallback((index: number) => {
    Alert.alert(
      'Remove task',
      `Do you want remove task ${state.toDoList[index]}`,
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
      dispatch({ type: TodoTypesEnum.REMOVE_TODO, payload: index });
    }
  }, [dispatch]);

  const saveToDo = useCallback((toDo: TToDo) => {
    dispatch({ type: TodoTypesEnum.UPDATE_TODO, payload: toDo })
  }, [dispatch]);

  return (
    <TodoContext.Provider value={{
      toDoList: state.toDoList,
      addToDo,
      removeToDo,
      saveToDo
    }}>
      {children}
    </TodoContext.Provider>
  )
}
