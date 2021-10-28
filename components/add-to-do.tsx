import React, { useState } from 'react';
import { Alert, View, Keyboard, TextInput, StyleSheet } from 'react-native';
import { EnumColors } from '../enums/colors';
import { Ionicons } from '@expo/vector-icons';

type TPropTypes = {
  addToDo: (title: string) => void;
};

export const AddToDo = ({ addToDo }: TPropTypes): JSX.Element => {

  const [title, setTitle] = useState<string>('');

  function addToDoHandler() {
    if (!title.trim()) {
      Alert.alert('Task title can`t be empty');
      return;
    }
    addToDo(title);
    setTitle('');
    Keyboard.dismiss();
  }

  return (
    <View style={styles.wrapper}>
      <TextInput
        placeholder="Input title for new task"
        value={title}
        style={styles.input}
        onChangeText={setTitle}
        autoCorrect={false}
        autoCapitalize="none"
      />
      <Ionicons.Button onPress={addToDoHandler} name="add-circle-outline">Add</Ionicons.Button>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10
  },
  input: {
    flex: 1,
    borderStyle: 'solid',
    borderBottomWidth: 2,
    borderBottomColor: EnumColors.main,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginRight: 10
  }
});
