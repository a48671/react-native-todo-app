import { ScreenContext } from './screen.context';
import React, { useState } from 'react';

type TProps = {
  children: JSX.Element;
}

export const ScreenContextWrapper = ({ children }: TProps): JSX.Element => {
  const [toDoId, setToDoId] = useState(null);

  return (
    <ScreenContext.Provider value={{ setToDoId, toDoId }}>
      {children}
    </ScreenContext.Provider>
  );
};
