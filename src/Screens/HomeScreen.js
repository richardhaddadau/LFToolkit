import {
  ActivityIndicator,
  FlatList,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import SingleStat from "../Components/SingleStat";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import * as FileSystem from "expo-file-system";
import { useEffect, useState } from "react";

const readFile = async (
  fileDirectory = FileSystem.cacheDirectory + "saved"
) => {
  return await FileSystem.readAsStringAsync(fileDirectory + "statistics");
};

const HomeScreen = ({ navigation }) => {
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

  const [totalStone, setTotalStone] = useState(0);
  const [totalIron, setTotalIron] = useState(0);
  const [totalZCoins, setTotalZCoins] = useState(0);
  const [totalDiamonds, setTotalDiamonds] = useState(0);

  const [refreshingStats, setRefreshingStats] = useState(false);

  const calculateStats = () => {
    setRefreshingStats(true);

    setTotalStone(
      statisticsData.mainStone +
        500 * statisticsData.stone500 +
        150 * statisticsData.stone150 +
        50 * statisticsData.stone50 +
        10 * statisticsData.stone10 +
        5 * statisticsData.stone5 +
        2 * statisticsData.stone2
    );

    setTotalIron(
      statisticsData.mainIron +
        300 * statisticsData.iron300 +
        100 * statisticsData.iron100 +
        30 * statisticsData.iron30 +
        6 * statisticsData.iron6 +
        3 * statisticsData.iron3 +
        2 * statisticsData.iron2
    );

    setTotalZCoins(
      statisticsData.mainZCoins +
        500 * statisticsData.zCoins500 +
        100 * statisticsData.zCoins100 +
        50 * statisticsData.zCoins50 +
        15 * statisticsData.zCoins15 +
        5 * statisticsData.zCoins5 +
        statisticsData.zCoins1
    );

    setTotalDiamonds(statisticsData.mainDiamonds);

    setRefreshingStats(false);
  };

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

      calculateStats();
    });
  }, []);

  const TestData = [
    {
      id: 1,
      title: "Building #1",
      progress: 85,
      theme: "#f8c820",
    },
    {
      id: 2,
      title: "Building #2",
      progress: 35,
      theme: "#c6005f",
    },
    {
      id: 3,
      title: "Building #3",
      progress: 22,
      theme: "#4792ed",
    },
    {
      id: 4,
      title: "Building #4",
      progress: 22,
      theme: "#4792ed",
    },
    {
      id: 5,
      title: "Building #5",
      progress: 22,
      theme: "#4792ed",
    },
    {
      id: 6,
      title: "Building #6",
      progress: 22,
      theme: "#4792ed",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={TestData}
        ListHeaderComponent={
          <View style={styles.header}>
            <ImageBackground
              source={require("../../assets/Imgs/Header-Background.jpg")}
              resizeMode="cover"
              style={styles.headerImage}
            >
              <View style={styles.headerPanel}>
                <Text style={styles.greeting}>Hi Edmodantes</Text>
                <View style={styles.statPanel}>
                  <Text
                    style={{
                      marginTop: 15,
                      marginBottom: 5,
                      fontSize: 16,
                      color: "white",
                    }}
                  >
                    Current Statistics:
                  </Text>
                  <SingleStat data={totalStone} description={"Stone"} />
                  <SingleStat data={totalIron} description={"Iron"} />
                  <SingleStat data={totalZCoins} description={"Z Coins"} />
                  <SingleStat data={totalDiamonds} description={"Diamonds"} />
                </View>

                <TouchableWithoutFeedback
                  onPress={() => navigation.navigate("Statistics")}
                >
                  <View
                    style={{
                      position: "absolute",
                      flexDirection: "row",
                      right: 20,
                      bottom: 15,
                    }}
                  >
                    {refreshingStats ? (
                      <ActivityIndicator size={"small"} color={"#02C3B1"} />
                    ) : null}
                    <MaterialCommunityIcons
                      name="pencil-box"
                      size={30}
                      color="white"
                    />
                  </View>
                </TouchableWithoutFeedback>
              </View>
            </ImageBackground>
          </View>
        }
        renderItem={({ item }) => {
          let progressStr = item.progress + "%";

          return (
            <TouchableWithoutFeedback
              key={item.id}
              onPress={() =>
                navigation.navigate("Building", {
                  buildingItem: item,
                })
              }
            >
              <View style={styles.card}>
                <View style={styles.cardTop}>
                  <View style={styles.cardIcon}></View>
                  <View style={styles.cardDesc}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.subtitle}>{item.progress}%</Text>
                    <View style={styles.progressWrapper}>
                      <View
                        style={[
                          styles.progressBar,
                          {
                            width: progressStr,
                            backgroundColor: item.theme,
                          },
                        ]}
                      ></View>
                    </View>
                  </View>
                </View>
              </View>
            </TouchableWithoutFeedback>
          );
        }}
        ListEmptyComponent={
          <View
            style={{
              flex: 1,
              marginTop: 60,
              alignItems: "center",
            }}
          >
            <Text style={{ color: "#b1b1b1" }}>
              No building is currently being tracked.
            </Text>
            <Text style={{ color: "#b1b1b1" }}>
              Tap the big{" "}
              <AntDesign name="pluscircle" size={17} color="#d35322" /> to
              start.
            </Text>
          </View>
        }
      />

      <View style={styles.addButton}>
        <AntDesign name="plus" size={30} color="white" />
      </View>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    marginBottom: -25,
    overflow: "hidden",
  },
  headerImage: {
    paddingBottom: 40,
  },
  headerPanel: {
    marginTop: 30,
    paddingVertical: 15,
    paddingHorizontal: 20,
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.65)",
    zIndex: 10,
    elevation: 2,
  },
  greeting: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  card: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    width: "75%",
    height: 80,
    alignSelf: "center",
    borderRadius: 7,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: 7,
    shadowRadius: 6,
    shadowOpacity: 1,
    elevation: 7,
    overflow: "hidden",
  },
  cardTop: {
    flexDirection: "row",
    flexWrap: "nowrap",
  },
  cardDesc: {
    flex: 1,
    marginLeft: 10,
  },
  cardIcon: {
    marginBottom: 10,
    height: 60,
    aspectRatio: 1,
    backgroundColor: "#fff",
    borderRadius: 999,
    shadowColor: "#000",
    shadowRadius: 4,
    shadowOpacity: 0.25,
    elevation: 5,
  },
  title: {
    opacity: 0.5,
    fontWeight: "bold",
    fontSize: 15,
  },
  subtitle: {
    opacity: 0.5,
    fontWeight: "thin",
    fontSize: 12,
  },
  progressWrapper: {
    marginTop: 10,
    width: "100%",
    height: 7,
    backgroundColor: "#e1e1e1",
    borderRadius: 10,
    overflow: "hidden",
  },
  progressBar: {
    height: "100%",
  },
  addButton: {
    position: "absolute",
    padding: 10,
    bottom: 20,
    right: 20,
    backgroundColor: "#d35322",
    borderRadius: 999,
    elevation: 8,
  },
});

export default HomeScreen;
