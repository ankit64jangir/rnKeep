import React from 'react';
import {CompositeNavigationProp} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import {memo} from 'react';
import HomeScreen from '../Screens/HomeScreen';

export type StackNavigatorParamList = {
  Home: undefined;
};

export type NavigationType<RouteName extends keyof StackNavigatorParamList> =
  CompositeNavigationProp<
    NativeStackNavigationProp<StackNavigatorParamList, RouteName>,
    NativeStackNavigationProp<StackNavigatorParamList>
  >;

const Stack = createNativeStackNavigator<StackNavigatorParamList>();

const AppNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Group
        screenOptions={{
          headerShown: false,
          presentation: 'containedModal',
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default memo(AppNavigation);
