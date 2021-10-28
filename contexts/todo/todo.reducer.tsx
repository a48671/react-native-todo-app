import { TodoTypesEnum } from './todo-types.enum';
import { TAction, TTodoState } from './todo.types';

type THandlers = {
  [key: TodoTypesEnum]: (state: TTodoState, action: TAction) => TTodoState
};

const handlers: THandlers = {
  [TodoTypesEnum.ADD_TODO]: (state, { payload }) => ({
    ...state,
    toDoList: [...state.toDoList, { id: new Date().toString(), title: payload}]
  }),
  [TodoTypesEnum.REMOVE_TODO]: (state, { payload }) => {
    const toDoList = state.toDoList;
    const index = payload;
    return ({
      ...state,
      toDoList: [...toDoList.slice(0, index), ...toDoList.slice(index + 1)]
    });
  },
  [TodoTypesEnum.UPDATE_TODO]: (state, { payload }) => {
    const toDo = payload;
    return ({
      ...state,
      toDoList: state.toDoList.map(currentToDo => {
        if (toDo.id === currentToDo.id) {
          return toDo;
        }
        return currentToDo;
      })
    });
  },
  [TodoTypesEnum.DEFAULT]: (state, action) => state
};

export function todoReducer(state: TTodoState, action: TAction): TTodoState {
  const handler = handlers[action.type] || handlers[TodoTypesEnum.DEFAULT];
  return handler(state, action);
}
