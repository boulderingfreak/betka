import { Text, StyleSheet, View, useColorScheme } from "react-native";
import { Image } from "react-native";
export default function Map() {
  return (
    <View style={styles.container}>
      <Text>
        i weź zrób tu jakoś żeby poprostu mozna bylo PRZYBLIŻAĆ palcami
      </Text>
      <Image
        style={styles.imgIcon}
        src="https://pub-672397cd77d34b5b9220ad364a4bdd6a.r2.dev/test/obiekto_strefy.png"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  imgIcon: {
    height: 100,
    width: 300,
    resizeMode: "contain",
  },
});
