import { TToDo } from './todo.types';
import { createContext } from 'react';

type TTodoContextValue = {
  toDoList: Array<TToDo>;
  addToDo: (title: string) => void;
  removeToDo: (toDo: TToDo) => void;
  saveToDo: (toDo: TToDo) => void;
  fetchToDos: VoidFunction;
  hideLoader: VoidFunction;
  loading: boolean;
}

export const TodoContext = createContext<TTodoContextValue>({
  toDoList: [],
  addToDo: (title: string) => void 0,
  removeToDo: (toDo: TToDo) => void 0,
  saveToDo: (toDo: TToDo) => void 0,
  fetchToDos: () => void 0,
  hideLoader: () => void 0,
  loading: false,
});
