import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";

//* LevelFilterProps = list of props (key-value pairs) that are passed to component from PARENT?
type LevelFilterProps = {
  // selectedGym: string;
  //* funkcja obsługująca wybrany gym (kliknięcie) -> przekaż tej funkcji key-value pair o kluczu "item" którego value to obiekt JS zawierający dwa key-value
  handleLevelChange: (item: { label: string; value: string }) => void;
  disable: boolean; //* key-value - włącznik pressable
  menuLabel: string; //* key-value - string for placeholder
  marginLeft: number; //* key-value - adjuster
  data: any[]; //* key-value - data
};

const LevelFilter = (props: LevelFilterProps) => {
  // const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false); //* gym filter inner state

  return (
    <View style={styles.container}>
      {/* {renderLabel()} */}
      <Dropdown
        disable={props.disable}
        containerStyle={styles.dropDownContainerStyle}
        itemTextStyle={styles.itemTextStyle}
        style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
        placeholderStyle={[
          styles.placeholderStyle,
          { marginLeft: props.marginLeft },
          isFocus && { color: "blue" },
        ]}
        selectedTextStyle={[
          styles.placeholderStyle,
          { marginLeft: props.marginLeft },
          isFocus && { color: "blue" },
        ]}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        iconColor="black"
        data={props.data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? props.menuLabel : props.menuLabel} //!!!!!!!!!!!!!!!!!!!!!!
        searchPlaceholder="Szukaj..."
        // value={value}
        onFocus={() => {
          setIsFocus(true);
          // console.log("focused");
        }}
        onBlur={() => setIsFocus(false)}
        // onChange={(item) => {
        //   setValue(item.value);
        //   setIsFocus(false);
        // }}
        onChange={props.handleLevelChange}
      />
    </View>
  );
};

export default LevelFilter;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  dropDownContainerStyle: {
    borderRadius: 8,
  },

  dropdown: {
    height: 40,
    width: 90,
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 8,
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
  },
  itemTextStyle: {
    fontSize: 20,
    fontFamily: "BarlowCondensed-Regular",
  },
});
