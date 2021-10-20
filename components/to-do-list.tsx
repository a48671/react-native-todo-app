import { TToDoTypes } from '../types';
import { ToDoItem } from './to-do-item';
import React from 'react';
import { FlatList, ListRenderItemInfo } from 'react-native';

type TPropTypes = {
  list: Array<TToDoTypes>;
  removeToDo: (index: number) => void;
  openToDo: (toDoId: string) => void;
}

export const ToDoList = ({ list, removeToDo, openToDo }: TPropTypes): JSX.Element => {

  function renderItem({ item, index }: ListRenderItemInfo<TToDoTypes>) {
    return (
      <ToDoItem
        remove={removeToDo.bind(null, index)}
        toDo={item}
        openToDo={openToDo}
      />
    );
  }

  return (
    <FlatList<TToDoTypes>
      data={list}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
};
