import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { useEffect } from "react";

export function useLoadFonts() {
  SplashScreen.preventAutoHideAsync();
  const [loaded, error] = useFonts({
    "BarlowCondensed-Bold": require("../assets/fonts/Barlow/Condensed/BarlowCondensed-Bold.ttf"),
    "BarlowCondensed-SemiBold": require("../assets/fonts/Barlow/Condensed/BarlowCondensed-SemiBold.ttf"),
    "BarlowCondensed-Regular": require("../assets/fonts/Barlow/Condensed/BarlowCondensed-Regular.ttf"),
    "BarlowCondensed-Light": require("../assets/fonts/Barlow/Condensed/BarlowCondensed-Light.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }
}
