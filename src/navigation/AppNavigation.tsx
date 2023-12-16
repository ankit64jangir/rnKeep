import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {memo} from 'react';
import HomeScreen from '../Screens/HomeScreen';
import AddNoteScreen from '../Screens/AddNoteScreen';
import {StackNavigatorParamList} from '../types';

const Stack = createNativeStackNavigator<StackNavigatorParamList>();

const AppNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Group
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="AddNote"
          component={AddNoteScreen}
          options={{
            animation: 'slide_from_bottom',
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default memo(AppNavigation);
