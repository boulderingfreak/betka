import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import lightMode from "../../styles/theme";

//* GymFilterProps = list of props (key-value pairs) that are passed to component from PARENT?
type GymFilterProps = {
  // selectedGym: string;
  //* funkcja obsługująca wybrany gym (kliknięcie) -> przekaż tej funkcji key-value pair o kluczu "item" którego value to obiekt JS zawierający dwa key-value
  handleGymChange: (item: { label: string; value: string }) => void;
  disable: boolean; //* key-value - włącznik pressable
  menuLabel: string; //* key-value - string for placeholder
  marginLeft: number; //* key-value - adjuster
  data: any[]; //* key-value - data
  selectedGym: string;
};

const GymFilter = (props: GymFilterProps) => {
  // const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false); //* gym filter inner state

  // styles.container
  return (
    <Dropdown
      style={[styles.dropdown, isFocus && { borderColor: lightMode.text }]}
      disable={props.disable}
      itemTextStyle={styles.itemTextStyle}
      itemContainerStyle={styles.itemContainerStyle}
      placeholderStyle={[
        styles.placeholderStyle,
        { marginLeft: props.marginLeft },
        isFocus && { color: lightMode.text },
      ]}
      selectedTextStyle={[
        styles.placeholderStyle,
        { marginLeft: props.marginLeft },
        isFocus && { color: lightMode.text },
      ]}
      inputSearchStyle={styles.inputSearchStyle}
      searchPlaceholderTextColor={lightMode.textMuted}
      iconStyle={styles.iconStyle}
      iconColor={isFocus ? lightMode.text : lightMode.textMuted}
      data={props.data}
      search
      maxHeight={300}
      labelField="label"
      valueField="value"
      placeholder={props.menuLabel}
      searchPlaceholder="Szukaj..."
      onFocus={() => {
        setIsFocus(true);
        console.log("GYM FILTER FOCUSED");
      }}
      onBlur={() => setIsFocus(false)}
      onChange={props.handleGymChange}
      value={props.selectedGym}
    />
  );
};

export default GymFilter;

const styles = StyleSheet.create({
  dropdown: {
    height: 60,
    width: 90,
    backgroundColor: lightMode.bgLight,
    borderWidth: 1,
    borderColor: lightMode.textMuted,
    borderRadius: 8,
  },
  dropDownContainerStyle: {
    backgroundColor: "pink",
  },
  icon: {
    marginRight: 10,
  },
  label: {
    position: "absolute",
    backgroundColor: "white",
    left: 10,
    top: -10,
    zIndex: 999, //? https://reactnative.dev/docs/layout-props zIndex
    paddingHorizontal: 2,
    fontSize: 16,
    fontFamily: "BarlowCondensed-Light",
  },
  placeholderStyle: {
    color: lightMode.textMuted,
    fontSize: 20,
    fontFamily: "BarlowCondensed-SemiBold",
    marginBottom: 3,
  },
  selectedTextStyle: {
    fontSize: 20,
    fontFamily: "BarlowCondensed-SemiBold",
    marginBottom: 3,
  },
  iconStyle: {
    width: 22,
    height: 25,
  },
  inputSearchStyle: {
    height: 50,
    fontSize: 16,
    fontFamily: "BarlowCondensed-Light",
    borderRadius: 8,
    // backgroundColor: "purple",
  },
  itemTextStyle: {
    fontSize: 20,
    fontFamily: "BarlowCondensed-Regular",
    color: lightMode.textMuted,
  },
  itemContainerStyle: {
    backgroundColor: lightMode.bgLight,
  },
});
