import {
  StyleSheet,
  View,
  Image,
  Text,
  ScrollView,
  FlatList,
  Pressable,
} from "react-native";
import { useState, useEffect } from "react";
import Feather from "@expo/vector-icons/Feather";
import BoulderCard from "../../components/BoulderCard";
import GymsFilter from "../../components/filters/GymFilter";
import SectorFilter from "../../components/filters/SectorFilter";
import LevelFilter from "../../components/filters/LevelFilter";

import gyms from "../../data/gyms";
import sectors from "../../data/test data/sectors";
import levels from "../../data/test data/levels";

import boulders from "../../data/boulders";

export default function MainBetka() {
  const [disableSectors, setDisableSectors] = useState(true);
  const [disableLevels, setDisableLevels] = useState(true);
  const [selectedGym, setSelectedGym] = useState("");
  const [actualBoulders, setFiltredBoulders] = useState(boulders);

  // const [selectedSector, setSelectedSector] = useState("");
  // const [selectedLevel, setSelectedLevel] = useState("");
  // const [gymFilter, setGymFilter] = useState("");
  //! ----------------------------------------------------------------------
  // const actualFilters = [selectedGym, selectedSector, selectedLevel];
  // aktualny stan boulderów dla flatlista
  //! tu mozna by bylo sie zastanowić nad innymi useState

  function handleGymChange(item: { label: string; value: string }) {
    setSelectedGym(item.value);
    // setGymFilter(item.label);
    console.log(`Gym name:  ${item.label} (item.label)`);
    console.log(`Gym ID: ${item.value} (item.value)`);

    setDisableSectors(false);
    setDisableLevels(false);

    console.log(`Unlocking sectors and levels...`);

    // filterByGym by name
    filterByGym(item.label);

    switch (item.value) {
      case "0":
        //! Tutaj?
        // filterByGym(item.label);
        console.log(`selected gym = OBIEKTO`);
        console.log("Loading OBIEKTO sectors..."); //? OBIEKTO
        console.log("Loading OBIEKTO levels...");
        break;
      case "1":
        console.log(`selected gym = CRUX`);
        console.log("Loading CRUX sectors..."); //? CRUX
        console.log("Loading CRUX levels...");
        break;
      case "2":
        console.log(`selected gym = VOLT`);
        console.log("Loading VOLT sectors..."); //? VOLT
        console.log("Loading VOLT levels...");
        break;
      default:
        console.log(`this will never happen`);
    }
  }

  function handleSectorChange(item: { label: string; value: string }) {
    // setSelectedSector(item.value);
    console.log(`Sector name: ${item.label}`);
    console.log(`Sector ID: ${item.value}`);

    // filter by sector
    filterBySector(item.label);
  }

  function handleLevelChange(item: { label: string; value: string }) {
    // setSelectedLevel(item.value);
    console.log(`Level name: ${item.label}`);
    console.log(`Level ID: ${item.value}`);

    // filter by level
    filterByLevel(item.label);
  }

  // Potrzebuje zrobic cos takiego - mieć CONDITION jako zmienna/state do którego mogę dodawać/odejmować:
  //
  // actualFilters, setFilters(+= ?)
  //
  // item.gym === "Obiekto"  to jako zmienna
  // item.gym === "Obiekto" + item.sector === "Zietka" + item.level = "3"

  // const filtredBoulders = boulders.filter((item) => I_TUTAJ_JAKIS_STATE?);

  // yNamectualFilters = [selectedGym, selectedSector, selectedLevel];

  //! && item.sector === selectedSector && item.level === selectedLevel

  function filterByGym(gym: string) {
    const filtredByGym = boulders.filter((item) => item.gym === gym); //* ---------------------- pamietaj tu jest boulders.filter
    setFiltredBoulders(filtredByGym);
    console.log("Filtred by gym");
  }

  function filterBySector(sector: string) {
    const filtredBySector = actualBoulders.filter(
      //* ---------------------- pamietaj tu jest actualBoulders.filter
      (item) => item.sector === sector,
    );

    setFiltredBoulders(filtredBySector);
    console.log("Filtred by sector");
  }

  function filterByLevel(level: string) {
    const filtredByLevel = actualBoulders.filter(
      //* ---------------------- pamietaj tu jest actualBoulders.filter
      (item) => item.level === level,
    );

    setFiltredBoulders(filtredByLevel);
    console.log("Filtred by level");
  }

  function resetFilters() {
    setDisableSectors(true);
    setDisableLevels(true);
    setSelectedGym("");
    setFiltredBoulders(boulders);
    //     const [disableSectors, setDisableSectors] = useState(true);
    // const [disableLevels, setDisableLevels] = useState(true);
    // const [selectedGym, setSelectedGym] = useState("");
    // const [actualBoulders, setFiltredBoulders] = useState(boulders);
  }

  // function filterByGym() {
  //   const filtredByGym = boulders.filter((item) => item.gym === "Obiekto"); // pierwszy pomysł: wyrenderuj po filtrze: TYLKO INCOMPLETE TASKI ZOSTAJĄ
  //   setFiltredBoulders(filtredByGym);
  // }

  const boulderCards = boulders.map((boulder) => (
    <BoulderCard
      key={boulder.id} //! ????????????????????????????????????????
      id={boulder.id}
      imgSrc={boulder.imgSrc}
      gym={boulder.gym}
      sector={boulder.sector}
      level={boulder.level}
    />
  ));

  return (
    <View style={styles.background}>
      <View style={styles.headerBox}>
        <Image
          style={styles.logo}
          src={
            "https://pub-672397cd77d34b5b9220ad364a4bdd6a.r2.dev/imgs/betka_logo_dark.png"
          }
        />
        <Text style={styles.headerText}>betka</Text>
      </View>
      <View style={styles.dropDownMenuBox}>
        <GymsFilter
          handleGymChange={handleGymChange}
          disable={false}
          data={gyms}
          menuLabel="Ścianka"
          marginLeft={8}
        />

        <View style={[!disableSectors ? { opacity: 1 } : { opacity: 0.2 }]}>
          <SectorFilter
            handleSectorChange={handleSectorChange}
            disable={disableSectors}
            data={gyms[Number(selectedGym)].sectors}
            menuLabel="Sektor"
            marginLeft={8}
          />
        </View>

        <View style={[!disableSectors ? { opacity: 1 } : { opacity: 0.2 }]}>
          <LevelFilter
            handleLevelChange={handleLevelChange}
            disable={disableLevels}
            data={gyms[Number(selectedGym)].levels}
            menuLabel="Poziom"
            marginLeft={8}
          />
        </View>
        <View style={styles.filterIconBox}>
          <View style={[!disableSectors ? { opacity: 1 } : { opacity: 0.2 }]}>
            <Pressable onPress={resetFilters}>
              <Image
                style={styles.imgIcon}
                src="https://pub-672397cd77d34b5b9220ad364a4bdd6a.r2.dev/imgs/filter-reset-svgrepo-com.png"
              />
            </Pressable>
          </View>
        </View>
      </View>
      <View style={styles.recentlyAddBox}>
        <Text style={styles.recentlyAddText}>Ostatnio dodane</Text>
        <View style={{}}>
          <Feather name="map" size={38} color="black" />
        </View>
      </View>

      <View style={styles.flatListBox}>
        <FlatList
          data={actualBoulders} //! <------- state after selection
          contentContainerStyle={styles.contentContainerStyle}
          renderItem={({ item }) => (
            <BoulderCard
              id={item.id}
              imgSrc={item.imgSrc}
              gym={item.gym}
              sector={item.sector}
              level={item.level}
            />
          )}
          keyExtractor={(item) => String(item.id)}
        />
      </View>

      {/* <Text>OLD SCROLLVIEW:</Text>
      <ScrollView contentContainerStyle={styles.contentContainerStyle}>
        {boulderCards}
      </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: "red",
    flex: 1,
    marginTop: 40,
  },
  headerBox: {
    backgroundColor: "lightgreen",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    justifyContent: "center",
  },
  headerText: {
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
    backgroundColor: "orange",
    flex: 1,
    flexDirection: "row",
    padding: 12,
    gap: 10,
  },
  sectorsOpacityActive: {
    opacity: 0.2,
  },
  sectorsOpacityUnactive: {
    opacity: 1,
  },
  filterIconBox: {
    // backgroundColor: "red",
    justifyContent: "center",
    marginRight: 0,
  },
  imgIcon: {
    height: 40,
    width: 40,
  },
  recentlyAddBox: {
    backgroundColor: "yellow",
    flex: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 10,
    paddingRight: 10,
  },
  recentlyAddText: {
    fontSize: 28,
    fontFamily: "BarlowCondensed-Regular",
  },

  flatListBox: {
    flex: 8,
    backgroundColor: "blue",
  },

  contentContainerStyle: {
    backgroundColor: "cyan",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
    padding: 12,
    justifyContent: "center",
  },
});
