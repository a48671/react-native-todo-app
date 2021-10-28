import { ScreenContext } from '../contexts/screen/screen.context';
import { TodoContext } from '../contexts/todo/todo.context';
import { TextUI } from '../components/text.ui';
import { Edit } from '../components/edit';
import { Card } from '../components/card';
import { EnumColors } from '../enums/colors';
import React, { useContext, useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';

export const ToDo = (): JSX.Element => {

  const { saveToDo, removeToDo, toDoList } = useContext(TodoContext);
  const { toDoId, setToDoId } = useContext(ScreenContext);

  const [editIsOpen, setEditIsOpen] = useState(false);

  const toDo = toDoList.find(toDo => toDo.id === toDoId);
  function onRemove(): void {
    if (!toDo) return;
    const index = toDoList.indexOf(toDo);
    if (index < 0) return;
    removeToDo(index);
  }

  return (
    <View style={styles.wrapper}>
      <View style={styles.content}>
        <Card customStyles={{ marginBottom: 20 }} buttonText="Edit" onPress={setEditIsOpen.bind(null, true)}>
          <TextUI style={styles.title}>{toDo?.title ? toDo.title : 'Task not found :('}</TextUI>
        </Card>
      </View>
      <View style={styles.buttons}>
        <Button onPress={setToDoId.bind(null, null)} title="Back" color={EnumColors.grey} />
        <Button onPress={onRemove} title="Remove" color={EnumColors.danger} />
      </View>
      {toDo && <Edit isOpen={editIsOpen} setEditIsOpen={setEditIsOpen} toDo={toDo} save={saveToDo} />}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 10,
    flexDirection: 'column',
    width: '100%'
  },
  content: {
    flex: 1,
    width: '100%'
  },
  title: {
    width: '100%',
    fontSize: 20,
    marginBottom: 20
  },
  buttons: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
});
