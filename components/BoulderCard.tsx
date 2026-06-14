import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageSourcePropType,
  Pressable,
} from "react-native";

// type BoulderCardProps = {
//   imgUrl: ImageSourcePropType;
//   name: string;
//   id: number;
// };

// (props: BoulderCardProps)

const BoulderCard = () => {
  return (
    <View style={styles.boulderCard}>
      {/* <Image style={} source={props.imgUrl} /> */}
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
