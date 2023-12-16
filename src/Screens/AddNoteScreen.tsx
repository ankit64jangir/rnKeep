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
import {useNavigation} from '@react-navigation/native';
import useNotesStore from '../stores/useNotesStore';

const AddNoteScreen = () => {
  const navigation = useNavigation();
  const {notes, setNotes} = useNotesStore();
  const [noteData, setNoteData] = useState<INoteItem>({
    note: '',
    title: '',
    bg: '',
  });

  const handleAdd = () => {
    setNotes([noteData, ...notes]);
    setNoteData({
      title: '',
      note: '',
      bg: '',
    });
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.appBarContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <BackArrowIcon size={28} color="black" />
        </TouchableOpacity>
        <Text style={styles.appBarText}>Add New Note</Text>
      </View>
      <View style={styles.textContainer}>
        <TextInput
          placeholder="Title"
          style={styles.title}
          multiline
          autoFocus
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

      <Button title="Add" onPress={handleAdd} />
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
