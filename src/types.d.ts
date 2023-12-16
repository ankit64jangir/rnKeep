import {CompositeNavigationProp} from '@react-navigation/native';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

interface INoteItem {
  id: string;
  title: string;
  note: string;
  bg?: string;
  createdAt: Date;
  updatedAt: Date;
}

export type StackNavigatorParamList = {
  Home: undefined;
  AddNote: {
    note?: INoteItem;
  };
};

export type ViewNoteScreenNavigationProps = NativeStackScreenProps<
  StackNavigatorParamList,
  'AddNote'
>;

export type NavigationType<RouteName extends keyof StackNavigatorParamList> =
  CompositeNavigationProp<
    NativeStackNavigationProp<StackNavigatorParamList, RouteName>,
    NativeStackNavigationProp<StackNavigatorParamList>
  >;
