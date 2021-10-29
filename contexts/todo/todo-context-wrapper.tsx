import { ScreenContext } from '../screen/screen.context';
import { Alert } from 'react-native';
import { TToDo } from './todo.types';
import { TodoTypesEnum } from './todo-types.enum';
import { todoInitialState } from './todo.initial-state';
import { todoReducer } from './todo.reducer';
import { TodoContext } from './todo.context';
import React, { useCallback, useContext, useReducer } from 'react';

type TProps = {
  children: JSX.Element;
}

export function TodoContextWrapper({ children }: TProps): JSX.Element {
  const [state, dispatch] = useReducer(todoReducer, todoInitialState);

  const { setToDoId } = useContext(ScreenContext);

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
      setToDoId(null);
    }
  }, [dispatch, setToDoId]);

  const saveToDo = useCallback((toDo: TToDo) => {
    dispatch({ type: TodoTypesEnum.UPDATE_TODO, payload: toDo })
  }, [dispatch]);

  const showLoader = () => dispatch({ type: TodoTypesEnum.SHOW_LOADER, payload: null });
  const hideLoader = () => dispatch({ type: TodoTypesEnum.HIDE_LOADER, payload: null });
  const showError = (error: string) => dispatch({ type: TodoTypesEnum.SHOW_ERROR, payload: error });
  const clearError = () => dispatch({ type: TodoTypesEnum.CLEAR_ERROR, payload: null });

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
