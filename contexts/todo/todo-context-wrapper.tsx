import { Http } from '../../services/http';
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

  const addToDo = useCallback(async (title: string) => {
    try {
      const data: { name: string } = await Http.create(title);
      dispatch({ type: TodoTypesEnum.ADD_TODO, payload: { title, id: data.name } })
    } catch {
      showAlert();
    }
  }, [dispatch]);

  const removeToDo = useCallback((toDo: TToDo) => {
    Alert.alert(
      'Remove task',
      `Do you want remove task ${toDo.title}`,
      [
        { style: 'cancel', text: 'Cancel' },
        {
          style: 'destructive',
          text: 'Remove',
          onPress: remove
        }
      ]
    );
    async function remove() {
      try {
        await Http.remove(toDo);
        dispatch({ type: TodoTypesEnum.REMOVE_TODO, payload: toDo });
        setToDoId(null);
      } catch {
        showAlert();
      }
    }
  }, [dispatch, setToDoId]);

  const saveToDo = useCallback(async (toDo: TToDo) => {
    try {
      await Http.update(toDo);
      dispatch({ type: TodoTypesEnum.UPDATE_TODO, payload: toDo })
    } catch {
      showAlert();
    }
  }, [dispatch]);

  const showLoader = () => dispatch({ type: TodoTypesEnum.SHOW_LOADER, payload: null });
  const hideLoader = () => dispatch({ type: TodoTypesEnum.HIDE_LOADER, payload: null });

  async function fetchToDos() {
    showLoader();
    try {
      const data: { [key: string]: { title: string } } = await Http.get();
      const todos = Object.entries(data).map(([id, data]) => ({ id, title: data.title }));
      dispatch({ type: TodoTypesEnum.FETCH_TODOS, payload: todos });
    } catch (error) {
      Alert.alert(
        'Error message',
        'Something has went wrong...',
        [
          {
            style: 'default',
            text: 'Repeat',
            onPress: fetchToDos
          }
        ]
      );
    } finally {
      hideLoader();
    }
  }

  return (
    <TodoContext.Provider value={{
      toDoList: state.toDoList,
      addToDo,
      removeToDo,
      saveToDo,
      fetchToDos,
      hideLoader,
      loading: state.loading,
    }}>
      {children}
    </TodoContext.Provider>
  )
}

function showAlert(): void {
  Alert.alert(
    'Error message',
    'Something has went wrong...',
    [
      {
        style: 'cancel',
        text: 'Ok'
      }
    ]
  );
}
