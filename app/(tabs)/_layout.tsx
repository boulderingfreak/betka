import { Tabs } from "expo-router";
import Fontisto from "@expo/vector-icons/Fontisto";
import Feather from "@expo/vector-icons/Feather";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function Layout() {
  const [loaded, error] = useFonts({
    "BarlowCondensed-Bold": require("../../assets/fonts/Barlow/Condensed/BarlowCondensed-Bold.ttf"),
    "BarlowCondensed-SemiBold": require("../../assets/fonts/Barlow/Condensed/BarlowCondensed-SemiBold.ttf"),
    "BarlowCondensed-Regular": require("../../assets/fonts/Barlow/Condensed/BarlowCondensed-Regular.ttf"),
    "BarlowCondensed-Light": require("../../assets/fonts/Barlow/Condensed/BarlowCondensed-Light.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "blue" }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Main Page",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Fontisto size={size} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Feather size={size} name="settings" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
