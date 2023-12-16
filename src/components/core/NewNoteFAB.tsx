import React, {memo} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {PlusIcon} from '../../utils/icons';
import {theme} from '../../theme';
import {NavigationType} from '../../types';

const NewNoteFAB = () => {
  const navigation = useNavigation<NavigationType<'AddNote'>>();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('AddNote', {});
        }}>
        <View style={styles.plusContainer}>
          <PlusIcon size={32} color="#ffffff" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default memo(NewNoteFAB);

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    zIndex: 50,
    shadowColor: theme.gray900,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
  },
  plusContainer: {
    backgroundColor: '#c7d0d6',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    width: 54,
    height: 54,
  },
});
