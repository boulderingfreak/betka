import { StyleSheet, Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useVideoPlayer, VideoView } from "expo-video";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Entypo from "@expo/vector-icons/Entypo";
import AntDesign from "@expo/vector-icons/AntDesign";
import gyms from "../../data/gyms";
import boulders from "../../data/boulders";

//TODO:

// -try to make custom boulder page title

export default function BoulderPage() {
  const { id } = useLocalSearchParams();

  const videoSource = boulders[Number(id)].videoSource;

  const player = useVideoPlayer(videoSource, (player) => {
    player.loop = true;
    player.play();
  });

  return (
    <View style={styles.background}>
      <View>
        <Text>
          {boulders[Number(id)].gym},{boulders[Number(id)].sector},
          {boulders[Number(id)].level}, {boulders[Number(id)].color}
        </Text>
      </View>
      <View style={styles.videoContainer}>
        <VideoView
          style={styles.video}
          player={player}
          fullscreenOptions={{ enable: true }}
          allowsPictureInPicture
        />
      </View>
      <View style={styles.icons}>
        <FontAwesome name="heart-o" size={50} color="black" />
        <AntDesign name="plus-circle" size={50} color="black" />
        <Entypo name="share" size={50} color="black" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "white",
    // justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 32,
  },
  videoContainer: {
    backgroundColor: "red",
    padding: 10,
    height: "75%",
    width: "100%",
    alignItems: "center",
  },
  video: {
    // width: 220,
    width: "100%",
    // height: 390,
    height: "100%",
    // aspectRatio: "1/2",
    backgroundColor: "pink",
  },
  icons: {
    flexDirection: "row",
    gap: 30,
  },
});
