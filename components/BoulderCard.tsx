import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageSourcePropType,
  Pressable,
} from "react-native";
import * as SplashScreen from "expo-splash-screen";

// type BoulderCardProps = {
//   imgUrl: ImageSourcePropType;
//   name: string;
//   id: number;
// };

// (props: BoulderCardProps)

SplashScreen.preventAutoHideAsync();

const BoulderCard = () => {
  // useLoadFonts();
  return (
    <View style={styles.boulderCard}>
      <Text style={{ fontSize: 34, fontFamily: "BarlowCondensed-Light" }}>
        Ścianka
      </Text>
    </View>
  );
};

export default BoulderCard;

const styles = StyleSheet.create({
  boulderCard: {
    width: 150,
    height: 250,
    // borderRadius: 15,
    borderWidth: 2,
    backgroundColor: "red",
  },
});
