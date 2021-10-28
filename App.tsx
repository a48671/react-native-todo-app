import { ScreenContextWrapper } from './contexts/screen/screen-context-wrapper';
import { TodoContextWrapper } from './contexts/todo/todo-context-wrapper';
import { MainLayout } from './layouts/main-layout';
import React, { useState } from 'react';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

async function loadFonts() {
  await Font.loadAsync({
    'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf')
  });
}

export default function App() {

  const [isReady, setIsReady] = useState(false);

  if (!isReady) {
    return (
      <AppLoading
        startAsync={loadFonts}
        onError={console.error}
        onFinish={setIsReady.bind(null, true)}
      />
    )
  }

  return (
    <TodoContextWrapper>
      <ScreenContextWrapper>
        <MainLayout />
      </ScreenContextWrapper>
    </TodoContextWrapper>
  );
}

