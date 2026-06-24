import { StyleSheet, View, Image, Text, ScrollView } from "react-native";
import { useState } from "react";
import Feather from "@expo/vector-icons/Feather";
import BoulderCard from "../../components/BoulderCard";

import GymFilter from "../../components/GymFilter";
import SectorFilter from "../../components/SectorFilter";
import LevelFilter from "../../components/LevelFilter";

import gyms from "../../data/gyms";
import sectors from "../../data/sectors";
import levels from "../../data/levels";

export default function MainBetka() {
  const [disableSectors, setDisableSectors] = useState(true);
  const [disableLevels, setDisableLevels] = useState(true);

  // const [selectedGyms, setSelectedGym] = useState(gyms);
  const [loadedSectors, setLoadSectors] = useState(gyms); //! gyms? it works
  const [loadedLevels, setLoadLevels] = useState(gyms); //!

  // na później do filtrów
  const [selectedGymId, setSelectedGymId] = useState("");
  const [selectedSectorId, setSelectedSector] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");

  function handleGymId(gymId: string) {
    console.log(`index.tsx: gymId: ${gymId}`);

    switch (gymId) {
      case "0":
        setSelectedGymId(gymId);
        console.log(`selected gym = OBIEKTO`);

        setLoadSectors(sectors[0]);
        console.log("Loading OBIEKTO sectors..."); //? OBIEKTO

        setLoadLevels(levels[0]);
        console.log("Loading OBIEKTO levels...");
        break;
      case "1":
        setSelectedGymId(gymId);
        console.log(`selected gym = CRUX`);

        setLoadSectors(sectors[1]);
        console.log("Loading CRUX sectors..."); //? CRUX

        setLoadLevels(levels[1]);
        console.log("Loading CRUX levels...");
        break;
      case "2":
        setSelectedGymId(gymId);
        console.log(`selected gym = VOLT`);

        setLoadSectors(sectors[2]);
        console.log("Loading VOLT sectors..."); //? VOLT

        setLoadLevels(levels[2]);
        console.log("Loading VOLT levels...");
        break;
    }

    // After GYM selection unlock sectors UI and levels UI
    setDisableSectors(false);
    console.log("Unlocking sectors UI...");

    setDisableLevels(false);
    console.log("Unlocking levels UI...");

    //? and map load + map icon unlock
  }
  //! ---------------------------------------------------------------------------------------------
  // get
  // -Sector choosed:
  // 1. Load loadedLevels data by sectorId (value) and unlock loadedLevels UI
  // 2. Load map image by sectorId (value) and unlock map image UI

  function handleSectorId(sectorId: string) {
    console.log(`index.tsx: sectorId: ${sectorId}`);

    switch (sectorId) {
      case "0":
        setSelectedSector(sectors[Number(selectedGymId)][0].label);
        console.log(`id 0 sector choosed`);
        break;
      case "1":
        setSelectedSector(sectors[Number(selectedGymId)][1].label);
        console.log(`id 1 sector choosed`);
        break;
      case "2":
        setSelectedSector(sectors[Number(selectedGymId)][2].label);
        console.log(`id 2 sector choosed`);
        break;
    }
  }

  function handleLevelId(levelId: string) {
    console.log(`index.tsx: levelId: ${levelId}`);

    switch (levelId) {
      case "0":
        setSelectedLevel(levels[Number(selectedGymId)][0].label);
        console.log(`id 0 level choosed`);
        break;
      case "1":
        setSelectedLevel(levels[Number(selectedGymId)][1].label);
        console.log(`id 1 level choosed`);
        break;
      case "2":
        setSelectedLevel(levels[Number(selectedGymId)][1].label);
        console.log(`id 1 level choosed`);
        break;
    }
  }

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
        <View>
          <GymFilter
            disable={false}
            handleGymId={handleGymId} //!------------------------------------------------------------------
            menuLabel="Ścianka"
            ownData={gyms} //!
            marginLeft={8}
          />
        </View>

        <View style={[!disableSectors ? { opacity: 1 } : { opacity: 0.2 }]}>
          <SectorFilter
            disable={disableSectors}
            handleSectorId={handleSectorId}
            menuLabel="Sektor"
            ownData={loadedSectors} //!
            marginLeft={8}
          />
        </View>

        <View style={[!disableLevels ? { opacity: 1 } : { opacity: 0.2 }]}>
          <LevelFilter
            disable={disableLevels}
            handleLevelId={handleLevelId}
            menuLabel="Poziom"
            ownData={loadedLevels} //!
            marginLeft={8}
          />
        </View>

        <View style={[!disableSectors ? { opacity: 1 } : { opacity: 0.2 }]}>
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
  sectorsOpacityActive: {
    opacity: 0.2,
  },
  sectorsOpacityUnactive: {
    opacity: 1,
  },
  recentlyAddBox: {
    // backgroundColor: "pink",
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
