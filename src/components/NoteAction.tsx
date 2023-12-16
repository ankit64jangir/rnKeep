import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {INoteItem} from '../types';
import {theme} from '../theme';
import {DeleteIcon, PaintIcon} from '../utils/icons';
import dayjs from 'dayjs';

const NoteAction = ({note, deleteNote}: {note: INoteItem; deleteNote: any}) => {
  return (
    <View style={styles.actionContainer}>
      <PaintIcon size={28} color={theme.gray500} />
      <Text style={styles.text}>
        {note.createdAt.toString() !== note.updatedAt.toString()
          ? `Edited • ${dayjs(note.updatedAt).format('MMM D, YYYY')}`
          : dayjs(note.createdAt).format('MMM D, YYYY')}
      </Text>
      <TouchableOpacity onPress={deleteNote}>
        <DeleteIcon size={28} color={theme.gray500} />
      </TouchableOpacity>
    </View>
  );
};

export default NoteAction;

const styles = StyleSheet.create({
  actionContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingHorizontal: 12,
  },
  text: {
    fontSize: 12,
    fontWeight: '300',
    color: theme.gray500,
  },
});
