import { TToDo } from '../contexts/todo/todo.types';
import { TextUI } from '../components/text.ui';
import { Edit } from '../components/edit';
import { Card } from '../components/card';
import { EnumColors } from '../enums/colors';
import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';

type TPropTypes = {
  toDo?: TToDo;
  goBack: VoidFunction;
  onRemove: VoidFunction;
  save: (toDo: TToDo) => void;
}

export const ToDo = ({ goBack, toDo, onRemove, save }: TPropTypes): JSX.Element => {

  const [editIsOpen, setEditIsOpen] = useState(false);

  return (
    <View style={styles.wrapper}>
      <View style={styles.content}>
        <Card customStyles={{ marginBottom: 20 }} buttonText="Edit" onPress={setEditIsOpen.bind(null, true)}>
          <TextUI style={styles.title}>{toDo?.title ? toDo.title : 'Task not found :('}</TextUI>
        </Card>
      </View>
      <View style={styles.buttons}>
        <Button onPress={goBack} title="Back" color={EnumColors.grey} />
        <Button onPress={onRemove} title="Remove" color={EnumColors.danger} />
      </View>
      {toDo && <Edit isOpen={editIsOpen} setEditIsOpen={setEditIsOpen} toDo={toDo} save={save} />}
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
