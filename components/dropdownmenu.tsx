import React, { useState, useEffect, ComponentProps } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import Entypo from "@expo/vector-icons/Entypo";

//TODO - now - how to monitor SELECTED TEXT state ?
// TODO -> sprawdź renderItem lub samo value <---------------------------------------------------------------------------------------

// value to jest klucz

// jesli value == null to ZABLKOWANE MENU

// jesli value == 1 (albo "Obiekto") to odblokowujesz menu 2 i mape 2d

// + tu chyba warto zrobic 3 osobne komponenty bo tak:

// pierwszy komponent: trzyma scianki, kontroluje widoczność mapy i sektorów, dodaje filtr np. "volt"
// drugi komponent: trzyma sektory, kontroluje widoczność poziomów
// trzeci komponent: tylko dodaje do przyszlych filtrow poziom np. "3"


// how to monitor SELECTED TEXT state ?

// -fill correct data in each dropdown

// each gym has own data file.

//- block unfocused menus
// -Nothing choosed: Only gyms unlocked.
// -Obiekto choosed: +Sectors unlocked, +Map unlocked
// -Obiekto + Sektor choosed: levels unlocked.

//- create DropDownMenu DATA js file (Scianka //-> all gyms, Sektor //-> all sectors of this GYM, Poziom //-> all levels of this gym, IMG URI for GymMap2dImage (modal?)

type GymObject = {
  label: string;
  value: string;
  sectors: string[];
  levels: string[];
};

type DropDownProps = {
  disable: boolean;
  iconName: ComponentProps<typeof Entypo>["name"];
  menuLabel: string;
  marginLeft: number;
  ownData: any[];
};

// const data = [
//   { label: "Obiekto", value: "1" },
//   { label: "Volt WWA", value: "2" },
//   { label: "Camp4", value: "3" },
// ];

const DropdownComponent = (props: DropDownProps) => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  console.log(value);

  return (
    <View style={styles.container}>
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
        // placeholder={!isFocus ? props.menuLabel : props.menuLabel}
        placeholder={props.menuLabel}
        searchPlaceholder="Szukaj..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(item) => {
          setValue(item.value);
          setIsFocus(false);
        }}
        // renderItem={renderItem}
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
  dropDownContainerStyle: {
    borderRadius: 8,
    // borderWidth: 2,
    // borderColor: "black",
  },

  dropdown: {
    height: 40,
    width: 90,
    // backgroundColor: "yellow",
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
    marginBottom: 3,
  },
  selectedTextStyle: {
    fontSize: 20,
    fontFamily: "BarlowCondensed-SemiBold",
    marginBottom: 3,
  },
  iconStyle: {
    // marginLeft: 5,
    // backgroundColor: "pink",
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
