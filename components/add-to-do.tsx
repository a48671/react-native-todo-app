import React, { useState } from 'react';
import { Alert, View, Button, TextInput, StyleSheet } from 'react-native';
import { EnumColors } from '../enums/colors';

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
      <Button title="Add" onPress={addToDoHandler} />
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
    paddingVertical: 10
  }
});