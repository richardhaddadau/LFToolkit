import { View, Text, Pressable, StyleSheet } from "react-native";
import {
  Entypo,
  FontAwesome,
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useState } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import StoneScreen from "./StoneScreen";
import ZCoinsScreen from "./ZCoinsScreen";
import IronScreen from "./IronScreen";
import DiamondsScreen from "./DiamondsScreen";
import * as FileSystem from "expo-file-system";

const readFile = async (
  fileDirectory = FileSystem.cacheDirectory + "saved"
) => {
  return await FileSystem.readAsStringAsync(fileDirectory + "statistics");
};

const StatisticsScreen = ({ navigation }) => {
  const Tabs = createMaterialTopTabNavigator();

  const [statisticsData, useStatsticsData] = useState({
    mainStone: 0,
    mainIron: 41100,
    mainZCoins: 0,
    mainDiamonds: 0,
    stone500: 0,
    stone150: 0,
    stone50: 0,
    stone10: 0,
    stone5: 0,
    stone2: 0,
    iron300: 0,
    iron100: 0,
    iron30: 0,
    iron6: 0,
    iron3: 0,
    iron2: 0,
    zCoins500: 0,
    zCoins100: 0,
    zCoins50: 0,
    zCoins15: 0,
    zCoins5: 0,
    zCoins1: 0,
  });

  useEffect(() => {
    readFile().then((r) => {
      const statsObj = JSON.parse(r);

      statisticsData.mainStone = statsObj.mainStone;
      statisticsData.stone500 = statsObj.stone500;
      statisticsData.stone150 = statsObj.stone150;
      statisticsData.stone50 = statsObj.stone50;
      statisticsData.stone10 = statsObj.stone10;
      statisticsData.stone5 = statsObj.stone5;
      statisticsData.stone2 = statsObj.stone2;

      statisticsData.mainIron = statsObj.mainIron;
      statisticsData.iron300 = statsObj.iron300;
      statisticsData.iron100 = statsObj.iron100;
      statisticsData.iron30 = statsObj.iron30;
      statisticsData.iron6 = statsObj.iron6;
      statisticsData.iron3 = statsObj.iron3;
      statisticsData.iron2 = statsObj.iron2;

      statisticsData.mainZCoins = statsObj.mainZCoins;
      statisticsData.zCoins500 = statsObj.zCoins500;
      statisticsData.zCoins100 = statsObj.zCoins100;
      statisticsData.zCoins50 = statsObj.zCoins50;
      statisticsData.zCoins15 = statsObj.zCoins15;
      statisticsData.zCoins5 = statsObj.zCoins5;
      statisticsData.zCoins1 = statsObj.zCoins1;

      statisticsData.mainDiamonds = statsObj.mainDiamonds;
    });
  }, []);

  return (
    <SafeAreaView style={styles.screenWrap}>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-sharp" size={24} color="black" />
        </Pressable>
        <Text style={styles.headerTitle}>Statistics</Text>
      </View>

      <Tabs.Navigator>
        <Tabs.Screen
          name={"Stone"}
          component={StoneScreen}
          options={{
            tabBarIcon: (focused) => (
              <Entypo name="basecamp" size={15} color="black" />
            ),
          }}
        />
        <Tabs.Screen
          name={"Iron"}
          component={IronScreen}
          options={{
            tabBarIcon: (focused) => (
              <MaterialCommunityIcons name="gold" size={20} color="black" />
            ),
          }}
        />
        <Tabs.Screen
          name={"Z Coins"}
          component={ZCoinsScreen}
          options={{
            tabBarIcon: (focused) => (
              <FontAwesome5 name="coins" size={15} color="black" />
            ),
          }}
        />
        <Tabs.Screen
          name={"Diamonds"}
          component={DiamondsScreen}
          options={{
            tabBarIcon: (focused) => (
              <FontAwesome name="diamond" size={15} color="black" />
            ),
          }}
        />
      </Tabs.Navigator>

      <View style={styles.saveButton}>
        <Ionicons name="save" size={30} color="white" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screenWrap: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    paddingVertical: 20,
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#b5c1c5",
  },
  headerTitle: {
    marginLeft: 30,
    fontSize: 20,
  },
  container: {
    flex: 1,
    padding: 20,
  },
  statInput: {
    marginBottom: 20,
  },
  saveButton: {
    position: "absolute",
    padding: 10,
    bottom: 20,
    right: 20,
    backgroundColor: "#d35322",
    borderRadius: 999,
    elevation: 8,
  },
});

export default StatisticsScreen;
