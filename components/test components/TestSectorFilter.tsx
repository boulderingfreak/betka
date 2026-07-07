import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";

type SectorFilterProps = {
  selectedSector: string; // value = item id
  // setSelecetedSector: (selectedSector: string) => void;
  disable: boolean;
  menuLabel: string;
  marginLeft: number;
  ownData: any[]; //! .
  // [sectorGroupKey: number]: any;
  handleSectorId: (value: string) => void;
  // selectedSectorList:
};

//! value is selectedSector

const SectorFilter = (props: SectorFilterProps) => {
  //? const [value, setValue] = useState(null);
  // const [selectedSector, setSelectedSector] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

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
        valueField="selectedSector" //! 1. value or selectedSector?
        confirmSelectItem
        onConfirmSelectItem={(item) => {
          //?props.handleSectorId(item.value);
          props.handleSectorId(item.selectedSector);
          setIsFocus(false);
          //? setValue(item.value);
          //? setSelectedSector(item.selectedSector);
        }}
        placeholder={!isFocus ? props.menuLabel : props.menuLabel}
        // placeholder={props.menuLabel}
        searchPlaceholder="Szukaj..."
        //? value={value}
        value={props.selectedSector}
        onFocus={() => {
          setIsFocus(true);
          // console.log("focused");
        }}
        onBlur={() => setIsFocus(false)}
        onChange={(item) => {
          //? setValue(item.value);
          //? setSelectedSector(item.selectedSector);
          setIsFocus(false);
        }}
      />
    </View>
  );
};

export default SectorFilter;

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
