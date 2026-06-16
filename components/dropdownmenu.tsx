import React, { useState, useEffect, ComponentProps } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import Entypo from "@expo/vector-icons/Entypo";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { useLoadFonts } from "../hooks/useLoadFonts";
import { theme } from "../styles/theme";

SplashScreen.preventAutoHideAsync();

type DropDownProps = {
  iconName: ComponentProps<typeof Entypo>["name"];
  menuLabel: string;
  marginLeft: number;
};

const data = [
  { label: "Obiekto", value: "1" },
  { label: "Volt WWA", value: "2" },
  { label: "Camp4", value: "3" },
];

const wszystkieBety = [
  {
    location: "Obiekto",
    sector: "Dach",
    grade: "1",
    videoUrl: "r2/costam.mp4",
  },
  { label: "Volt WWA", value: "2" },
  { label: "Camp4", value: "3" },
];

const obiektoSectors = [
  { label: "Slab", value: "1" },
  { label: "Dach", value: "2" },
  { label: "Stary in Wanna", value: "3" },
  { label: "Keskownia", value: "4" },
  { label: "Hejterownia", value: "5" },
];

const obiektoLevels = [
  { label: "1", value: "1" },
  { label: "2", value: "2" },
  { label: "3", value: "3" },
  { label: "4", value: "4" },
  { label: "5", value: "5" },
  { label: "6", value: "6" },
  { label: "7", value: "7" },
  { label: "8", value: "8" },
  { label: "9", value: "9" },
];

const DropdownComponent = (props: DropDownProps) => {
  useLoadFonts();
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  // const renderLabel = () => {
  //   if (value || isFocus) {
  //     return (
  //       <Text style={[styles.label, isFocus && { color: "blue" }]}>
  //         {props.dropDownLabel}
  //       </Text>
  //     );
  //   }
  //   return null;
  // };

  return (
    <View style={styles.container}>
      {/* {renderLabel()} */}
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
        placeholderStyle={[
          styles.placeholderStyle,
          { marginLeft: props.marginLeft },
          isFocus && { color: "blue" },
        ]}
        //* placeholderStyle={[
        //*   styles.placeholderStyle,
        //*   isFocus && { color: "blue" },
        //* ]}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        iconColor="black"
        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? props.menuLabel : props.menuLabel}
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(item) => {
          setValue(item.value);
          setIsFocus(false);
        }}
        // renderLeftIcon={() => (
        //   <Entypo
        //     style={styles.icon}
        //     color={isFocus ? "blue" : "black"}
        //     name={props.iconName}
        //     size={20}
        //   />
        // )}
      />
    </View>
  );
};

export default DropdownComponent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    // padding: 0,
  },
  dropdown: {
    height: 40,
    width: 90,
    backgroundColor: "yellow",
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 8,
    // alignContent: "center",
    // justifyContent: "center",
    // padding: 6,
    // paddingHorizontal: 8,
    // marginLeft: 3,
  },
  icon: {
    marginRight: 10,
  },
  label: {
    position: "absolute",
    backgroundColor: "white",
    left: 20,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 0,
    fontSize: 12,
  },
  placeholderStyle: {
    fontSize: 20,
    fontFamily: "BarlowCondensed-SemiBold",
    marginBottom: 4,
  },
  selectedTextStyle: {
    fontSize: 14,
  },
  iconStyle: {
    // marginLeft: 5,
    // backgroundColor: "pink",
    width: 22,
    height: 25,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
