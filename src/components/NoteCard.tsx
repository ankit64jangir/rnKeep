import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {theme} from '../theme';
import {useNavigation} from '@react-navigation/native';
import {INoteItem, NavigationType} from '../types';

type NoteCardTypes = {
  note: INoteItem;
};

const NoteCard = ({note}: NoteCardTypes) => {
  const navigation = useNavigation<NavigationType<'AddNote'>>();

  const openNote = () => {
    navigation.navigate('AddNote', {note});
  };

  return (
    <TouchableOpacity activeOpacity={0.5} onPress={openNote}>
      <View
        style={[
          styles.container,
          {backgroundColor: note.bg ? note.bg : theme.bg},
        ]}>
        <Text style={styles.title}>{note.title}</Text>
        <Text style={styles.note}>{note.note}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default NoteCard;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    marginHorizontal: 12,
    marginVertical: 5,
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 12,
    borderColor: theme.gray300,
    // shadowColor: theme.gray900,
    // shadowOffset: {
    //   width: 0,
    //   height: 1,
    // },
    // shadowOpacity: 0.15,
    // shadowRadius: 1.0,
    // elevation: 1,
  },
  title: {
    color: theme.gray900,
    fontSize: 16,
    fontWeight: '600',
  },
  note: {
    color: theme.gray900,
    fontSize: 14,
    marginTop: 10,
  },
});
