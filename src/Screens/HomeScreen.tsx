import {
  View,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Alert,
  Text,
} from 'react-native';
import React, {useCallback, useState} from 'react';
import NewNoteFAB from '../components/core/NewNoteFAB';
import {theme} from '../theme';
import useNotesStore from '../stores/useNotesStore';
import NoteCard from '../components/NoteCard';
import NoNote from '../components/core/NoNote';
import {INoteItem} from '../types';
import HomeHeader from '../components/HomeHeader';

const HomeScreen = () => {
  const {notes, setNotes} = useNotesStore();
  const [multipleNote, setMultipleNote] = useState<INoteItem[]>([]);

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e: any) => {
    setSearchTerm(e);
  };

  const filteredNotes = notes.filter(note => {
    const titleMatch = note.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const noteMatch = note.note
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    return titleMatch || noteMatch;
  });

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
    Alert.alert('Are you sure you want to delete these note?', '', [
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

        <HomeHeader
          multipleNote={multipleNote}
          deleteMultipleNoteAlert={deleteMultipleNoteAlert}
          setMultipleNote={setMultipleNote}
          handleSearchChange={handleSearchChange}
        />

        <FlatList
          data={filteredNotes}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          ListEmptyComponent={
            filteredNotes.length === 0 && searchTerm.length !== 0 ? (
              <View style={styles.noSearchResult}>
                <Text style={styles.noSearchResultText}>
                  No search results found!!!
                </Text>
              </View>
            ) : (
              <NoNote />
            )
          }
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
  noSearchResult: {
    marginTop: 16,
    alignItems: 'center',
  },
  noSearchResultText: {
    fontSize: 16,
    color: theme.gray900,
  },
});
