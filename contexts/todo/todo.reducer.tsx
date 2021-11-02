import { TodoTypesEnum } from './todo-types.enum';
import { TAction, TTodoState } from './todo.types';

type THandlers = {
  [key in keyof typeof TodoTypesEnum]: (state: TTodoState, action: TAction) => TTodoState
};

const handlers: THandlers = {
  [TodoTypesEnum.ADD_TODO]: (state: TTodoState, { payload }: TAction) => ({
    ...state,
    toDoList: [...state.toDoList, { title: payload.title, id: payload.id }]
  }),
  [TodoTypesEnum.REMOVE_TODO]: (state: TTodoState, { payload }: TAction) => {
    const toDoList = state.toDoList;
    const id = payload.id;
    return ({
      ...state,
      toDoList: toDoList.filter(toDo => toDo.id !== id)
    });
  },
  [TodoTypesEnum.UPDATE_TODO]: (state: TTodoState, { payload }: TAction) => {
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
  [TodoTypesEnum.SHOW_LOADER]: (state: TTodoState) => ({ ...state, loading: true }),
  [TodoTypesEnum.HIDE_LOADER]: (state: TTodoState) => ({ ...state, loading: false }),
  [TodoTypesEnum.SHOW_ERROR]: (state: TTodoState, { payload }: TAction) => ({ ...state, error: payload }),
  [TodoTypesEnum.CLEAR_ERROR]: (state: TTodoState) => ({ ...state, error: null }),
  [TodoTypesEnum.FETCH_TODOS]: (state: TTodoState, { payload }: TAction) => ({ ...state, toDoList: payload }),
  [TodoTypesEnum.DEFAULT]: (state: TTodoState) => state
};

export function todoReducer(state: TTodoState, action: TAction): TTodoState {
  const handler = handlers[action.type] || handlers[TodoTypesEnum.DEFAULT];
  return handler(state, action);
}
