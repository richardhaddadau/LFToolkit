import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View, StyleSheet } from "react-native";
import { Switch, TextInput } from "react-native-paper";
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

  const [useMoon, setUseMoon] = useState(false);

  const isNotEmpty = (value) => {
    if (value !== null && value !== 0 && value !== undefined && value !== "") {
      return true;
    } else {
      return false;
    }
  };

  useEffect(() => {
    const minutesInADay = 24 * 60;
    const minutesInAnHour = 60;

    if (
      isNotEmpty(days) &&
      isNotEmpty(hours) &&
      isNotEmpty(minutes) &&
      isNotEmpty(workers)
    ) {
      const totalTimeInMinutes =
        parseInt(minutes) + hours * minutesInAnHour + days * minutesInADay;

      const fixedTotalTime = totalTimeInMinutes / workers;

      console.log(totalTimeInMinutes, fixedTotalTime);

      setCalculatedDays(Math.floor(fixedTotalTime / minutesInADay));
      setCalculatedHours(
        Math.floor((fixedTotalTime % minutesInADay) / minutesInAnHour)
      );

      setCalculatedMinutes(Math.ceil(fixedTotalTime % 60));

      console.log(calculatedDays, calculatedHours, calculatedMinutes);
    }
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
            placeholder={"eg. 17"}
            outlineColor={"#c6005f"}
            activeOutlineColor={"#c6005f"}
            onChangeText={(text) => setDays(text.replace(/[^0-9]/g, ""))}
            keyboardType="numeric"
          ></TextInput>

          <TextInput
            style={styles.constructionInput}
            mode={"outlined"}
            label={"Hours"}
            value={hours}
            placeholder={"eg. 46"}
            outlineColor={"#c6005f"}
            activeOutlineColor={"#c6005f"}
            onChangeText={(text) => setHours(text.replace(/[^0-9]/g, ""))}
            keyboardType="numeric"
          ></TextInput>

          <TextInput
            style={styles.constructionInput}
            mode={"outlined"}
            label={"Minutes"}
            value={minutes}
            placeholder={"eg. 23"}
            outlineColor={"#c6005f"}
            activeOutlineColor={"#c6005f"}
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
            placeholder={"eg. 2"}
            outlineColor={"#f8c820"}
            activeOutlineColor={"#f8c820"}
            onChangeText={(text) => setWorkers(text.replace(/[^1-6]/g, ""))}
            keyboardType="numeric"
          ></TextInput>
        </View>

        <Text>Use Speed-Up Time (Moon)?</Text>
        <Switch value={useMoon} onValueChange={() => setUseMoon(!useMoon)} />
        <View style={styles.constructionTime}>
          <TextInput
            style={styles.constructionInput}
            mode={"outlined"}
            label={"Workers"}
            value={workers}
            placeholder={"eg. 2"}
            outlineColor={"#f8c820"}
            activeOutlineColor={"#f8c820"}
            onChangeText={(text) => setWorkers(text.replace(/[^1-6]/g, ""))}
            keyboardType="numeric"
          ></TextInput>
        </View>
        <Text>
          There are{" "}
          <Text style={styles.calculatedResult}>
            {isNotEmpty(calculatedDays) ? `${calculatedDays} Days, ` : null}
            {isNotEmpty(calculatedHours) ? `${calculatedHours} Hours, ` : null}
            {isNotEmpty(calculatedMinutes)
              ? `${calculatedMinutes} Minutes`
              : null}{" "}
          </Text>
          left
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
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  constructionTime: {
    marginTop: 5,
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  constructionInput: {
    width: "25%",
  },
  calculatedResult: {
    fontWeight: "bold",
  },
});

export default ConstructionCalcScreen;
