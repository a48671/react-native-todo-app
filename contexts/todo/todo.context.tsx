import { TToDo } from './todo.types';
import { createContext } from 'react';

type TTodoContextValue = {
  toDoList: Array<TToDo>;
  addToDo: (title: string) => void;
  removeToDo: (index: number) => void;
  saveToDo: (toDo: TToDo) => void;
}

export const TodoContext = createContext<TTodoContextValue>({
  toDoList: [],
  addToDo: (title: string) => void 0,
  removeToDo: (index: number) => void 0,
  saveToDo: (toDo: TToDo) => void 0
});
