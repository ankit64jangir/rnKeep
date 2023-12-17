import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Button,
  Platform,
} from 'react-native';
import React, {useState} from 'react';
import {theme} from '../theme';
import {BackArrowIcon} from '../utils/icons';
import useNotesStore from '../stores/useNotesStore';
import {generateRandomId} from '../utils/constants';
import {INoteItem, ViewNoteScreenNavigationProps} from '../types';
import NoteAction from '../components/NoteAction';

const AddNoteScreen = ({navigation, route}: ViewNoteScreenNavigationProps) => {
  const {note} = route.params || {};
  const {notes, setNotes} = useNotesStore();
  const [noteData, setNoteData] = useState<INoteItem>({
    id: note?.id || generateRandomId(),
    note: note?.note || '',
    title: note?.title || '',
    bg: note?.bg || '',
    createdAt: note?.createdAt || new Date(),
    updatedAt: new Date(),
  });

  const addNote = () => {
    setNotes([noteData, ...notes]);
    setNoteData({
      id: '',
      title: '',
      note: '',
      bg: '',
      createdAt: new Date(''),
      updatedAt: new Date(''),
    });
    navigation.goBack();
  };

  const updateNote = () => {
    const updatedNotes = notes.map(n => {
      if (n.id === note?.id) {
        return noteData;
      }
      return n;
    });
    setNotes(updatedNotes);
    navigation.goBack();
  };

  const deleteNote = () => {
    const updatedNotes = notes.filter(n => n.id !== note?.id);
    setNotes(updatedNotes);
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.appBarContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <BackArrowIcon size={28} color="black" />
        </TouchableOpacity>
        <Text style={styles.appBarText}>{note ? '' : 'Add New Note'}</Text>
      </View>
      <View style={styles.textContainer}>
        <TextInput
          placeholder="Title"
          style={styles.title}
          multiline
          autoFocus={note ? false : true}
          value={noteData.title}
          onChangeText={value => setNoteData({...noteData, title: value})}
        />
        <TextInput
          placeholder="Note"
          style={styles.note}
          multiline
          value={noteData.note}
          onChangeText={value => setNoteData({...noteData, note: value})}
        />
      </View>

      <Button
        title={note ? 'Update' : 'Add'}
        onPress={note ? updateNote : addNote}
      />

      {note && <NoteAction note={note} deleteNote={deleteNote} />}
    </SafeAreaView>
  );
};

export default AddNoteScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.bg,
  },
  appBarContainer: {
    paddingHorizontal: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  appBarText: {
    fontSize: 16,
    marginLeft: 10,
    fontWeight: '600',
    color: theme.gray900,
  },
  textContainer: {
    marginTop: 16,
    paddingHorizontal: 12,
  },
  title: {
    fontSize: 24,
  },
  note: {
    fontSize: 16,
    marginTop: Platform.OS === 'android' ? 0 : 14,
  },
});
