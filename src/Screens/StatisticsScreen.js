import {
  View,
  Text,
  Pressable,
  StyleSheet,
  ActivityIndicator,
  TouchableWithoutFeedback,
} from "react-native";
import {
  Entypo,
  FontAwesome,
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useEffect, useState } from "react";
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
const saveFile = async (
  fileDirectory = FileSystem.cacheDirectory + "saved",
  fileObject
) => {
  const fileToString = JSON.stringify(fileObject);
  await FileSystem.writeAsStringAsync(
    fileDirectory + "statistics",
    fileToString
  );
};

const StatsContext = React.createContext({
  mainStone: 0,
  mainIron: 0,
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
  diamonds20: 0,
  diamonds10: 0,
});

const StatisticsScreen = ({ navigation }) => {
  const Tabs = createMaterialTopTabNavigator();

  const [saving, setSaving] = useState(false);

  const [statisticsData, useStatsticsData] = useState({
    mainStone: 0,
    mainIron: 0,
    mainZCoins: 0,
    mainDiamonds: 0,
    stone5000: 0,
    stone1000: 0,
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
    diamonds20: 0,
    diamonds10: 0,
  });

  useEffect(() => {
    readFile().then((r) => {
      const statsObj = JSON.parse(r);

      statisticsData.mainStone = statsObj.mainStone;
      statisticsData.stone5000 = statsObj.stone5000;
      statisticsData.stone1000 = statsObj.stone1000;
      statisticsData.stone500 = statsObj.stone500;
      statisticsData.stone150 = statsObj.stone150;
      statisticsData.stone50 = statsObj.stone50;
      statisticsData.stone10 = statsObj.stone10;
      statisticsData.stone5 = statsObj.stone5;
      statisticsData.stone2 = statsObj.stone2;

      statisticsData.mainIron = statsObj.mainIron;
      statisticsData.iron600 = statsObj.iron600;
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
      statisticsData.diamonds20 = statsObj.diamonds20;
      statisticsData.diamonds10 = statsObj.diamonds10;
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

      <StatsContext.Provider
        value={{
          mainStone: statisticsData.mainStone,
          mainIron: statisticsData.mainIron,
          mainZCoins: statisticsData.mainZCoins,
          mainDiamonds: statisticsData.mainDiamonds,
          stone5000: statisticsData.stone5000,
          stone1000: statisticsData.stone1000,
          stone500: statisticsData.stone500,
          stone150: statisticsData.stone150,
          stone50: statisticsData.stone50,
          stone10: statisticsData.stone10,
          stone5: statisticsData.stone5,
          stone2: statisticsData.stone2,
          iron600: statisticsData.iron600,
          iron300: statisticsData.iron300,
          iron100: statisticsData.iron100,
          iron30: statisticsData.iron30,
          iron6: statisticsData.iron6,
          iron3: statisticsData.iron3,
          iron2: statisticsData.iron2,
          zCoins500: statisticsData.zCoins500,
          zCoins100: statisticsData.zCoins100,
          zCoins50: statisticsData.zCoins50,
          zCoins15: statisticsData.zCoins15,
          zCoins5: statisticsData.zCoins5,
          zCoins1: statisticsData.zCoins1,
          diamonds20: statisticsData.diamonds20,
          diamonds10: statisticsData.diamonds10,
        }}
      >
        <Tabs.Navigator
          screenOptions={{
            tabBarIndicatorStyle: {
              backgroundColor: "#02C3B1",
            },
            tabBarItemStyle: {
              paddingHorizontal: 0,
            },
            tabBarIconStyle: {
              alignItems: "center",
              justifyContent: "center",
            },
            tabBarLabelStyle: {
              marginTop: 5,
              fontSize: 11,
              fontStyle: "italic",
              fontWeight: "bold",
              textTransform: "none",
            },
          }}
        >
          <Tabs.Screen
            name={"Mains"}
            component={StoneScreen}
            options={{
              tabBarIcon: (focused) => (
                <Entypo name="basecamp" size={15} color="black" />
              ),
            }}
          />
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
      </StatsContext.Provider>

      <TouchableWithoutFeedback
        onPress={() => {
          setSaving(!saving);
        }}
      >
        <View style={styles.saveButton}>
          {saving ? (
            <View>
              <Text
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: -80,
                  fontStyle: "italic",
                  fontSize: 14,
                  color: "#d35322",
                }}
              >
                Saving...
              </Text>

              <ActivityIndicator size={"large"} color={"white"} />
            </View>
          ) : (
            <Ionicons name="save" size={30} color="white" />
          )}
        </View>
      </TouchableWithoutFeedback>
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
    justifyContent: "center",
    alignItems: "center",
    bottom: 20,
    right: 20,
    width: 60,
    aspectRatio: 1,
    backgroundColor: "#d35322",
    borderRadius: 999,
    elevation: 8,
  },
});

export default StatisticsScreen;
