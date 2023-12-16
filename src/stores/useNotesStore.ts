import AsyncStorage from '@react-native-async-storage/async-storage';
import {create} from 'zustand';

type NoteStoreTypes = {
  notes: INoteItem[];
  setNotes: (note: INoteItem[]) => void;
};

const notes: INoteItem[] = [];

const useNotesStore = create<NoteStoreTypes>(set => ({
  notes: notes,
  setNotes: async note => {
    // Update the store
    set(() => ({notes: note}));

    // Update AsyncStorage
    try {
      const jsonValue = JSON.stringify(note);
      await AsyncStorage.setItem('notes', jsonValue);
    } catch (error) {
      console.log('Error adding note to AsyncStorage:', error);
    }
  },
}));

export const initializeNotesStore = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('notes');
    if (jsonValue !== null) {
      const parsedArray: INoteItem[] = JSON.parse(jsonValue);
      useNotesStore.setState({notes: parsedArray});
    }
  } catch (error) {
    console.log('Error retrieving notes from AsyncStorage:', error);
  }
};

export default useNotesStore;
