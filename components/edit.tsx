import React, { useState } from 'react';
import { Modal, View, Button, StyleSheet, TextInput } from 'react-native';
import { TToDoTypes } from '../types';
import { EnumColors } from '../enums/colors';

type TPropTypes = {
  isOpen: boolean;
  setEditIsOpen: (editIsOpen: boolean) => void;
  toDo: TToDoTypes;
  save: (toDo: TToDoTypes) => void;
};

export const Edit = ({ isOpen, setEditIsOpen, toDo, save }: TPropTypes): JSX.Element => {

  const [title, setTitle] = useState<string>(toDo.title);

  function onSaveHandler(): void {
    save({ ...toDo, title });
    setEditIsOpen(false);
  }

  return (
    <Modal visible={isOpen} transparent={false} animated animationType="slide">
      <View style={styles.wrapper}>
        <TextInput value={title} style={styles.input} placeholder="Task text" onChangeText={setTitle} />
        <View style={styles.buttons}>
          <Button title="Cancel" onPress={setEditIsOpen.bind(null, false)} color={EnumColors.danger} />
          <Button title="Save" onPress={onSaveHandler}  color={EnumColors.main} disabled={toDo.title === title} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10
  },
  buttons: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-around"
  },
  input: {
    width: '100%',
    borderStyle: 'solid',
    borderBottomWidth: 2,
    borderBottomColor: EnumColors.main,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginBottom: 30
  }
});
