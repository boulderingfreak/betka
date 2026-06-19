import { StyleSheet, View, Image, Text, ScrollView } from "react-native";
import { useState } from "react";
import DropdownComponent from "../../components/DropDownMenu";
import Feather from "@expo/vector-icons/Feather";
import BoulderCard from "../../components/BoulderCard";
import obiekto from "../../data/obiekto";
import crux from "../../data/crux";
import voltWwa from "../../data/voltWwa";
import gyms from "../../data/gyms";

export default function MainBetka() {
  const [disableSectors, setDisableSectors] = useState(true);
  const [disableLevels, setDisableLevels] = useState(true);
  return (
    <View style={styles.background}>
      <View style={styles.headerBox}>
        <Image
          style={styles.logo}
          source={require("../../assets/img/betka_logo_dark.png")}
        />
        <Text style={styles.headerText}>betka</Text>
      </View>
      <View style={styles.dropDownMenuBox}>
        <View style={{ opacity: 1 }}>
          <DropdownComponent
            disable={false}
            ownData={gyms}
            iconName={"location-pin"}
            menuLabel="Ścianka"
            marginLeft={8}
          />
        </View>

        <View style={{ opacity: 0.2 }}>
          <DropdownComponent
            disable={disableSectors}
            ownData={gyms}
            iconName={"map"}
            menuLabel="Sektor"
            marginLeft={16}
          />
        </View>

        <View style={{ opacity: 0.2 }}>
          <DropdownComponent
            disable={disableLevels}
            ownData={voltWwa}
            iconName={"bar-graph"}
            menuLabel="Poziom"
            marginLeft={12}
          />
        </View>

        <View style={{ opacity: 1 }}>
          <Feather name="map" size={40} color="black" />
        </View>
      </View>
      <View style={styles.recentlyAddBox}>
        <Text style={styles.recentlyAddText}>Ostatnio dodane</Text>
      </View>
      <ScrollView contentContainerStyle={styles.boulderCardsBox}>
        <BoulderCard />
        <BoulderCard />
        <BoulderCard />
        <BoulderCard />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: "white",
    marginTop: 40,
    marginBottom: 40,
    flex: 1,
    // alignItems: "stretch",
    // justifyContent: "center",
  },
  headerBox: {
    // backgroundColor: "pink",
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
  },
  headerText: {
    // color: "white",
    fontSize: 38,
    fontFamily: "BarlowCondensed-Bold",
    marginBottom: 10,
    marginLeft: 10,
  },
  logo: {
    height: 60,
    width: 60,
    resizeMode: "stretch",
  },
  dropDownMenuBox: {
    // backgroundColor: "yellow",
    flexDirection: "row",
    // justifyContent: "space-between",
    padding: 12,
    gap: 10,
  },
  recentlyAddBox: {
    backgroundColor: "pink",
    padding: 12,
  },
  recentlyAddText: {
    fontSize: 28,
    fontFamily: "BarlowCondensed-Regular",
  },
  boulderCardsBox: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 16,
    marginBottom: 16,
    gap: 16,
    justifyContent: "center",
  },
});
