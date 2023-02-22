import { ActivityIndicator, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as FileSystem from "expo-file-system";
import { useEffect } from "react";

const createDirectory = async (
  fileDirectory = FileSystem.cacheDirectory + "saved"
) => {
  try {
    await FileSystem.makeDirectoryAsync(fileDirectory);
  } catch (e) {
    console.log("Directory already exists");
  }
};

const createStatistics = async (
  fileDirectory = FileSystem.cacheDirectory + "saved"
) => {
  const typicalStatistics = {
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
  };

  try {
    const checkFile = await FileSystem.getInfoAsync(
      fileDirectory + "statistics"
    );

    if (!checkFile["exists"]) {
      await FileSystem.writeAsStringAsync(
        fileDirectory + "statistics",
        JSON.stringify(typicalStatistics)
      );
    }
  } catch (e) {
    console.log("File already exists");
  }
};

const SplashScreen = () => {
  useEffect(() => {
    createDirectory().then((r) => createStatistics());
  }, []);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000",
      }}
    >
      <Image
        style={{
          marginBottom: 30,
          height: 50,
          maxWidth: "65%",
          resizeMode: "contain",
        }}
        source={require("../../assets/logo.png")}
      />
      <ActivityIndicator size={"large"} color={"#02C3B1"} />
    </SafeAreaView>
  );
};

export default SplashScreen;
