import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const NoNote = () => {
  return (
    <View style={styles.container}>
      <Text>NoNote</Text>
    </View>
  );
};

export default NoNote;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
