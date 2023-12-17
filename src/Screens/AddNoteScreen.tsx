/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Platform,
} from 'react-native';
import React, {useCallback, useRef, useState} from 'react';
import {theme} from '../theme';
import {BackArrowIcon, TickIcon} from '../utils/icons';
import useNotesStore from '../stores/useNotesStore';
import {generateRandomId} from '../utils/constants';
import {INoteItem, ViewNoteScreenNavigationProps} from '../types';
import NoteAction from '../components/NoteAction';
import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import ColorPickerBottomSheet from '../components/ColorPickerBottomSheet';

const AddNoteScreen = ({navigation, route}: ViewNoteScreenNavigationProps) => {
  // ref
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const handleCloseModalPress = useCallback(() => {
    bottomSheetModalRef.current?.close();
  }, []);

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
    <GestureHandlerRootView style={{flex: 1}}>
      <SafeAreaView style={[styles.container, {backgroundColor: noteData.bg}]}>
        <View style={styles.appBarContainer}>
          <View style={styles.appBarLeft}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <BackArrowIcon size={28} color="black" />
            </TouchableOpacity>
            <Text style={styles.appBarText}>{note ? '' : 'Add New Note'}</Text>
          </View>
          <TouchableOpacity onPress={note ? updateNote : addNote}>
            <View style={styles.appBarRight}>
              <TickIcon size={32} color={theme.gray900} />
            </View>
          </TouchableOpacity>
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

        <NoteAction
          note={note}
          deleteNote={deleteNote}
          handlePresentModalPress={handlePresentModalPress}
        />

        <BottomSheetModalProvider>
          <ColorPickerBottomSheet
            bottomSheetModalRef={bottomSheetModalRef}
            handleCloseModalPress={handleCloseModalPress}
            noteData={noteData}
            setNoteData={setNoteData}
          />
        </BottomSheetModalProvider>
      </SafeAreaView>
    </GestureHandlerRootView>
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
    justifyContent: 'space-between',
  },
  appBarLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  appBarRight: {
    marginRight: 4,
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
