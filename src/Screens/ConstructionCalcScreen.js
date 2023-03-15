import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";

const ConstructionCalcScreen = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [workers, setWorkers] = useState(1);

  const [calculatedDays, setCalculatedDays] = useState(0);
  const [calculatedHours, setCalculatedHours] = useState(0);
  const [calculatedMinutes, setCalculatedMinutes] = useState(0);

  useEffect(() => {
    if ((days === 0 && hours === 0 && minutes === 0) || workers === 0) {
      console.log("oops");
      return false;
    }

    console.log(days);

    const minutesInADay = 24 * 60;
    const minutesInAnHour = 60;
    const totalTimeInMinutes =
      parseInt(minutes) + hours * minutesInAnHour + days * minutesInADay;
    const fixedTotalTime = totalTimeInMinutes / workers;

    console.log(typeof minutes);

    setCalculatedDays(Math.floor(fixedTotalTime / minutesInADay));
    setCalculatedHours(
      Math.floor((fixedTotalTime % minutesInADay) / minutesInAnHour)
    );
    setCalculatedMinutes(Math.ceil(fixedTotalTime % 60));
  }, [days, hours, minutes, workers]);

  return (
    <SafeAreaView style={styles.screenWrap}>
      <View style={styles.constructionWrap}>
        <Text>How much time is left till construction is complete?</Text>
        <View style={styles.constructionTime}>
          <TextInput
            style={styles.constructionInput}
            mode={"outlined"}
            label={"Days"}
            value={days}
            placeholder={"eg. 1"}
            activeOutlineColor={"#47656d"}
            onChangeText={(text) => setDays(text.replace(/[^0-9]/g, ""))}
            keyboardType="numeric"
          ></TextInput>

          <TextInput
            style={styles.constructionInput}
            mode={"outlined"}
            label={"Hours"}
            value={hours}
            placeholder={"eg. 1"}
            activeOutlineColor={"#47656d"}
            onChangeText={(text) => setHours(text.replace(/[^0-9]/g, ""))}
            keyboardType="numeric"
          ></TextInput>

          <TextInput
            style={styles.constructionInput}
            mode={"outlined"}
            label={"Minutes"}
            value={minutes}
            placeholder={"eg. 1"}
            activeOutlineColor={"#47656d"}
            onChangeText={(text) => setMinutes(text.replace(/[^0-9]/g, ""))}
            keyboardType="numeric"
          ></TextInput>
        </View>

        <Text>How many workers on this facility?</Text>
        <View style={styles.constructionTime}>
          <TextInput
            style={styles.constructionInput}
            mode={"outlined"}
            label={"Workers"}
            value={workers}
            placeholder={"eg. 1"}
            activeOutlineColor={"#47656d"}
            onChangeText={(text) => setWorkers(text.replace(/[^1-6]/g, ""))}
            keyboardType="numeric"
          ></TextInput>
        </View>
        <Text>
          {calculatedDays} Days, {calculatedHours} Hours, {calculatedMinutes}{" "}
          Minutes Left
        </Text>
      </View>

      <StatusBar style="auto" />
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
  constructionWrap: {
    padding: 10,
  },
  constructionTime: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  constructionInput: {
    width: "25%",
  },
});

export default ConstructionCalcScreen;
