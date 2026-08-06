import { router } from "expo-router";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";

type BoulderCardProps = {
  id: number;
  imgSrc: string;
  gym: string;
  sector: string;
  level: string;
};

const BoulderCard = (props: BoulderCardProps) => {
  return (
    <View style={styles.boulderCard}>
      <Pressable
        onPress={() =>
          router.navigate({
            pathname: "/boulderPage/[id]",
            params: { id: props.id },
          })
        }
      >
        <Image style={styles.img} src={props.imgSrc} />

        <View style={styles.boulderCardLevelBox}>
          <Text style={styles.boulderCardLevelText}>{props.level}</Text>
        </View>

        <View style={styles.boulderCardGymSectorBox}>
          <Text style={styles.boulderCardGymSectorText}>{props.gym}</Text>
          <Text style={styles.boulderCardGymSectorText}>{props.sector}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default BoulderCard;

const styles = StyleSheet.create({
  boulderCard: {
    // backgroundColor: "pink",
  },
  img: {
    width: 150,
    height: 250,
    borderRadius: 20,
  },
  boulderCardLevelBox: {
    position: "absolute",
    paddingTop: 2,
    paddingLeft: 10,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  boulderCardGymSectorBox: {
    position: "absolute",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 10,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  boulderCardLevelText: {
    color: "white",
    fontSize: 36,
    fontFamily: "BarlowCondensed-Bold",
  },
  boulderCardGymSectorText: {
    color: "white",
    fontSize: 18,
    fontFamily: "BarlowCondensed-Regular",
  },
});
