import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Dropdown } from "react-native-element-dropdown";

type GymFilterProps = {
  disable: boolean;
  menuLabel: string;
  marginLeft: number;
  ownData: any[]; //! .
  handleGymId: (gymId: string) => void;
};

const GymFilter = (props: GymFilterProps) => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  // const renderLabel = () => {
  //   if (value || isFocus) {
  //     return (
  //       <Text style={[styles.label, isFocus && { color: "blue" }]}>
  //         Ścianka
  //       </Text>
  //     );
  //   }
  //   return null;
  // };

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
        data={props.ownData}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        confirmSelectItem
        onConfirmSelectItem={(item) => {
          //* most important
          props.handleGymId(item.value);
          setIsFocus(false);
          setValue(item.value);
        }}
        placeholder={!isFocus ? props.menuLabel : props.menuLabel}
        // placeholder={props.menuLabel}
        searchPlaceholder="Szukaj..."
        value={value}
        onFocus={() => {
          setIsFocus(true);
          // console.log("focused");
        }}
        onBlur={() => setIsFocus(false)}
        onChange={(item) => {
          setValue(item.value);
          setIsFocus(false);
        }}
      />
    </View>
  );
};

export default GymFilter;

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
