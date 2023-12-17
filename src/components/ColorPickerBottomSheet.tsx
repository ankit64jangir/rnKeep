/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import {View, Animated, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useMemo} from 'react';
import {BottomSheetModal} from '@gorhom/bottom-sheet';
import ColorPicker from 'react-native-wheel-color-picker';
import {theme} from '../theme';
import {CrossIcon} from '../utils/icons';

type ColorPickerBottomSheetTypes = {
  bottomSheetModalRef: any;
  setNoteData: any;
  noteData: any;
  handleCloseModalPress: any;
};

const ColorPickerBottomSheet = ({
  bottomSheetModalRef,
  noteData,
  setNoteData,
  handleCloseModalPress,
}: ColorPickerBottomSheetTypes) => {
  const snapPoints = useMemo(() => ['60%', '60%'], []);
  return (
    <View style={styles.container}>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={1}
        snapPoints={snapPoints}
        backdropComponent={({style}) => (
          <Animated.View
            onTouchEnd={() => bottomSheetModalRef.current?.close()}
            style={[style, {backgroundColor: theme.modalBackdrop}]}
          />
        )}
        handleIndicatorStyle={{
          display: 'none',
        }}>
        <TouchableOpacity onPress={handleCloseModalPress}>
          <View style={styles.cross}>
            <CrossIcon size={32} color={theme.gray900} />
          </View>
        </TouchableOpacity>
        <View style={styles.colorPickerContainer}>
          <ColorPicker
            color={theme.bg}
            onColorChange={c => setNoteData({...noteData, bg: c})}
          />
        </View>
      </BottomSheetModal>
    </View>
  );
};

export default ColorPickerBottomSheet;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  colorPickerContainer: {
    flex: 1,
    padding: 20,
  },
  cross: {
    position: 'absolute',
    right: 20,
  },
});
