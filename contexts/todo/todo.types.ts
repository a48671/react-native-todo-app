import { TodoTypesEnum } from './todo-types.enum';

export type TToDo = {
  id: string;
  title: string;
}

export type TTodoState = {
  toDoList: Array<TToDo>;
  loading: boolean;
  error: string | null;
};

export type TAction = {
  type: TodoTypesEnum;
  payload: any;
};
