import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {theme} from './src/theme';
import {NavigationContainer} from '@react-navigation/native';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import AppNavigation from './src/navigation/AppNavigation';
import {enableFreeze} from 'react-native-screens';
import {initializeNotesStore} from './src/stores/useNotesStore';

enableFreeze(true);
initializeNotesStore();

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : theme.bg,
  };

  return (
    <NavigationContainer>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <BottomSheetModalProvider>
        <AppNavigation />
      </BottomSheetModalProvider>
    </NavigationContainer>
  );
}

export default App;
