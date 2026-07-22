import { router } from "expo-router";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageSourcePropType,
  Pressable,
} from "react-native";

//TODO

//!

//

//!

type BoulderCardProps = {
  id: number;
  imgSrc: string;
  gym: string;
  sector: string;
  level: string;
};

const BoulderCard = (props: BoulderCardProps) => {
  return (
    // <View style={styles.boulderCard}>
    //   <Link href={`boulderPage/[${Number(id)}].tsx`}>
    //     <Image style={styles.img} src={props.imgSrc} />
    //   </Link>
    // </View>

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
        <Text style={styles.textMiniatureLevel}>{props.level}</Text>
        <Text style={styles.textMiniatureGym}>{props.gym}</Text>
        {/* <Text style={styles.textMiniatureSector}>{props.sector}</Text> */}

        {/* <Text style={styles.descriptionLabel}>
          {props.gym}, {props.sector}, {props.level}
        </Text> */}
      </Pressable>
    </View>
  );
};

export default BoulderCard;

const styles = StyleSheet.create({
  boulderCard: {
    width: 150,
    height: 300, //! tutaj sie zastanowić czy uzywamy flex/czy czego

    //!
    //TODO:
    
    // -kiedy uzywamy flexa?

    //-ustawic flexa w calym boulder card

    //

    //-poczytać to https://www.javascripttutorial.net/react-native-tutorial/react-native-position-absolute/
    //-uzywac absoulte na texcie

    // borderRadius: 15,
    // borderWidth: 2,
    // backgroundColor: "red",
  },
  img: {
    width: 150,
    height: 250,
    borderRadius: 20,
  },
  descriptionLabel: {
    fontSize: 20,
    textAlign: "center",
  },
  textMiniatureLevel: {
    position: "absolute",
    padding: 5,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    fontSize: 42,
    // fontFamily: "BarlowCondensed-Regular",
    color: "white",
  },
  textMiniatureGym: {
    position: "absolute",
    padding: 5,
    left: 0,
    right: 0,
    top: 200,
    bottom: 0,
    fontSize: 20,
    // fontFamily: "BarlowCondensed-Regular",
    color: "white",
  },
  textMiniatureSector: {
    position: "absolute",
    padding: 5,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    fontSize: 42,
    // fontFamily: "BarlowCondensed-Regular",
    color: "white",
  },
});
