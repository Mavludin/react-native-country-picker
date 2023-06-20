import {BottomSheetTextInput} from '@gorhom/bottom-sheet';
import React, {useRef} from 'react';
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import {SearchIcon} from '../SearchIcon/SearchIcon';

type Props = {
  handleChange: (text: string) => void;
};

const SearchInputMemo = ({handleChange}: Props) => {
  const searchRef = useRef<TextInput | null>(null);

  const handleFocus = () => {
    searchRef.current?.focus();
  };

  return (
    <View style={styles.searchContainer}>
      <TouchableOpacity onPress={handleFocus}>
        <SearchIcon />
      </TouchableOpacity>
      <BottomSheetTextInput
        onChangeText={handleChange}
        style={styles.input}
        placeholder="Search"
        ref={searchRef}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: '#CBCBCB',
    borderBottomWidth: 1,
    paddingHorizontal: 15,
  },
  input: {
    fontSize: 20,
    lineHeight: 20,
    color: '#9A9A9A',
    marginLeft: 10,
  },
});

export const SearchInput = React.memo(SearchInputMemo);
