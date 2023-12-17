import {
  View,
  StyleSheet,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useCallback, useState} from 'react';
import NewNoteFAB from '../components/core/NewNoteFAB';
import {theme} from '../theme';
import useNotesStore from '../stores/useNotesStore';
import NoteCard from '../components/NoteCard';
import NoNote from '../components/core/NoNote';
import {INoteItem} from '../types';
import {CrossIcon, DeleteIcon} from '../utils/icons';

const HomeScreen = () => {
  const {notes, setNotes} = useNotesStore();
  const [multipleNote, setMultipleNote] = useState<INoteItem[]>([]);

  const selectMultipleNote = useCallback(
    (note: INoteItem) => {
      const isSelected = multipleNote.some(
        selectedNote => selectedNote.id === note.id,
      );

      if (isSelected) {
        setMultipleNote(
          multipleNote.filter(selectedNote => selectedNote.id !== note.id),
        );
      } else {
        setMultipleNote([...multipleNote, note]);
      }
    },
    [multipleNote, setMultipleNote],
  );

  const renderItem = useCallback(
    ({item}: {item: INoteItem}) => (
      <NoteCard
        key={item.id}
        note={item}
        selectMultipleNote={() => selectMultipleNote(item)}
        multipleNote={multipleNote}
      />
    ),
    [selectMultipleNote, multipleNote],
  );

  const keyExtractor = useCallback((note: INoteItem) => note.id, []);

  const deleteMultipleNote = () => {
    const updatedNotes = notes.filter(
      note => !multipleNote.some(multipleN => multipleN.id === note.id),
    );
    setNotes(updatedNotes);
    setMultipleNote([]);
  };

  const deleteMultipleNoteAlert = () => {
    Alert.alert('Are you sure you want to delete this note?', '', [
      {
        text: 'No',
        onPress: () => {
          setMultipleNote([]);
        },
      },
      {text: 'Yes', onPress: deleteMultipleNote},
    ]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <NewNoteFAB />
        {multipleNote.length !== 0 && (
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
        )}
        <FlatList
          data={notes}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          ListEmptyComponent={<NoNote />}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.bg,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    paddingHorizontal: 12,
  },
});
