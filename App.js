import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/Screens/HomeScreen";
import ProjectScreen from "./src/Screens/ProjectScreen";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import BottomTabs from "./src/Navigation/BottomTabs";
import { SafeAreaProvider } from "react-native-safe-area-context";
import StatisticsScreen from "./src/Screens/StatisticsScreen";
import { useState } from "react";
import SplashScreen from "./src/Screens/SplashScreen";

const Stack = createNativeStackNavigator();
const Tabs = createMaterialBottomTabNavigator();

export default function App() {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 1500);

  return (
    <SafeAreaProvider>
      {loading ? (
        <SplashScreen />
      ) : (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name={"Home"}
              component={BottomTabs}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Project"
              component={ProjectScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Statistics"
              component={StatisticsScreen}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </SafeAreaProvider>
  );
}
