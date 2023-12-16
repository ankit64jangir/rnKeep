import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Button,
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

  console.log(note?.createdAt.toString());

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

      {note && (
        <NoteAction note={note} deleteNote={deleteNote} />
        // <View style={styles.actionContainer}>
        //   <PaintIcon size={28} color={theme.gray500} />
        //   <Text>
        //     {note.createdAt.toString() !== note.updatedAt.toString()
        //       ? `Edited • ${dayjs(note.updatedAt).format('MMM D, YYYY')}`
        //       : dayjs(note.createdAt).format('MMM D, YYYY')}
        //   </Text>
        //   {/* <Text>{note?.createdAt.toString()}</Text> */}
        //   <TouchableOpacity onPress={deleteNote}>
        //     <DeleteIcon size={28} color={theme.gray500} />
        //   </TouchableOpacity>
        // </View>
      )}
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
    marginTop: 14,
  },
});
