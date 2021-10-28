import { createContext } from 'react';

type TContextValue = {
  toDoId: string | null,
  setToDoId: (toDoId: string | null) => void;
}

export const ScreenContext = createContext<TContextValue>({
  toDoId: null,
  setToDoId: (toDoId) => void 0
});
