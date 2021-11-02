import { TToDo } from '../contexts/todo/todo.types';
import { ToDoItem } from './to-do-item';
import React from 'react';
import { FlatList, ListRenderItemInfo } from 'react-native';

type TPropTypes = {
  list: Array<TToDo>;
  removeToDo: (toDo: TToDo) => void;
  openToDo: (toDoId: string) => void;
}

export const ToDoList = ({ list, removeToDo, openToDo }: TPropTypes): JSX.Element => {

  function renderItem({ item, index }: ListRenderItemInfo<TToDo>) {
    return (
      <ToDoItem
        remove={removeToDo.bind(null, item)}
        toDo={item}
        openToDo={openToDo}
      />
    );
  }

  return (
    <FlatList<TToDo>
      data={list}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
};
