import { TextUI } from '../components/text.ui';
import { EnumColors } from '../enums/colors';
import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { TToDo } from '../contexts/todo/todo.types';

type TPropTypes = {
  toDo: TToDo;
  remove: VoidFunction;
  openToDo: (toDoId: string) => void;
}

export const ToDoItem = ({ toDo, remove, openToDo }: TPropTypes): JSX.Element => {

  return (
    <TouchableOpacity onLongPress={remove} onPress={openToDo.bind(null, toDo.id)}>
      <View style={styles.wrapper}>
        <TextUI style={styles.title}>{toDo.title}</TextUI>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginVertical: 5,
    borderStyle: 'solid',
    borderRadius: 4,
    borderColor: EnumColors.main,
    borderWidth: 1
  },
  title: {
    color: 'black',
    fontSize: 14
  }
});
