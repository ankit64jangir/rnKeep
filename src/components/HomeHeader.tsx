import {View, TouchableOpacity, StyleSheet, TextInput} from 'react-native';
import React from 'react';
import {CrossIcon, DeleteIcon} from '../utils/icons';
import {INoteItem} from '../types';
import {theme} from '../theme';
import useNotesStore from '../stores/useNotesStore';

type HomeHeaderTypes = {
  multipleNote: INoteItem[];
  setMultipleNote: any;
  deleteMultipleNoteAlert: () => void;
  handleSearchChange: any;
};

const HomeHeader = ({
  multipleNote,
  deleteMultipleNoteAlert,
  setMultipleNote,
  handleSearchChange,
}: HomeHeaderTypes) => {
  const {notes} = useNotesStore();

  if (notes.length === 0) {
    return null;
  }

  return (
    <View style={styles.container}>
      {multipleNote.length !== 0 ? (
        <View style={styles.header}>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => setMultipleNote([])}>
            <CrossIcon size={28} color={theme.gray500} />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={deleteMultipleNoteAlert}>
            <DeleteIcon size={28} color={theme.gray500} />
          </TouchableOpacity>
        </View>
      ) : (
        <View>
          <TextInput
            placeholder="Search your notes"
            style={styles.input}
            placeholderTextColor={theme.gray900}
            onChangeText={handleSearchChange}
          />
        </View>
      )}
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    marginTop: 16,
    marginBottom: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    padding: 14,
    borderRadius: 100,
    backgroundColor: theme.gray300,
    fontSize: 16,
  },
});
