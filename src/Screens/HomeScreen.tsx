import {View, StyleSheet, SafeAreaView, FlatList} from 'react-native';
import React, {useCallback} from 'react';
import NewNoteFAB from '../components/core/NewNoteFAB';
import {theme} from '../theme';
import useNotesStore from '../stores/useNotesStore';
import NoteCard from '../components/NoteCard';

const HomeScreen = () => {
  const {notes} = useNotesStore();

  const renderItem = useCallback(
    ({item}: {item: INoteItem}) => <NoteCard key={item.title} note={item} />,
    [],
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <NewNoteFAB />
        <FlatList data={notes} renderItem={renderItem} />
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
});
