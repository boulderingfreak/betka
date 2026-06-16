import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { useEffect } from "react";

export function useLoadFonts() {
  SplashScreen.preventAutoHideAsync();
  const [loaded, error] = useFonts({
    "BarlowCondensed-Regular": require("../assets/fonts/Barlow/Condensed/BarlowCondensed-Regular.ttf"),
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
