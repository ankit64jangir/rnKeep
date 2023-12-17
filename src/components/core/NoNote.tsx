import {View, Text, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import {BlubIcon} from '../../utils/icons';
import {theme} from '../../theme';

const {height} = Dimensions.get('screen');

const NoNote = () => {
  return (
    <View style={styles.container}>
      <BlubIcon size={42} color={theme.gray900} />
      <Text style={styles.text}>Notes you add appear here</Text>
    </View>
  );
};

export default NoNote;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: height - 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: '400',
    marginTop: 16,
    color: theme.gray900,
  },
});
