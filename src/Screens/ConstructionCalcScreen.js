import { SafeAreaView } from "react-native-safe-area-context";
import {
  Text,
  View,
  StyleSheet,
  TouchableWithoutFeedbackComponent,
  TouchableOpacity,
} from "react-native";
import { Button, Switch, TextInput } from "react-native-paper";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";

const ConstructionCalcScreen = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [workers, setWorkers] = useState(1);

  const [useMoon, setUseMoon] = useState(false);
  const [moonMinutes, setMoonMinutes] = useState(0);

  const [calculatedDays, setCalculatedDays] = useState(0);
  const [calculatedHours, setCalculatedHours] = useState(0);
  const [calculatedMinutes, setCalculatedMinutes] = useState(0);

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
        <Text style={styles.settingsText}>
          How long until construction is complete?
        </Text>
        <View style={styles.constructionTime}>
          <TextInput
            style={styles.constructionInput}
            mode={"outlined"}
            label={"Days"}
            value={days}
            placeholder={"eg. 17"}
            outlineColor={"#c6005f"}
            activeOutlineColor={"#c6005f"}
            textColor={"#c2c2bd"}
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
            textColor={"#c2c2bd"}
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
            textColor={"#c2c2bd"}
            onChangeText={(text) => setMinutes(text.replace(/[^0-9]/g, ""))}
            keyboardType="numeric"
          ></TextInput>
        </View>

        <Text style={styles.settingsText}>
          How many workers on this facility?
        </Text>
        <View style={styles.singleInput}>
          <TouchableOpacity
            style={{ marginHorizontal: 10, marginTop: 5 }}
            onPress={() => setWorkers(parseInt(workers) - 1)}
          >
            <AntDesign name="minussquareo" size={30} color="#f8c820" />
          </TouchableOpacity>

          <Text style={styles.workersText}>{workers}</Text>

          <TouchableOpacity
            style={{ marginHorizontal: 10, marginTop: 5 }}
            onPress={() => setWorkers(parseInt(workers) + 1)}
          >
            <AntDesign name="plussquareo" size={30} color="#f8c820" />
          </TouchableOpacity>
        </View>

        <View style={styles.moonToggle}>
          <Text style={styles.settingsText}>Use Speed-Up Time (Moon)?</Text>
          <Switch
            value={useMoon}
            color="#720ab9"
            onValueChange={() => setUseMoon(!useMoon)}
          />
        </View>

        {useMoon ? (
          <>
            <Text style={styles.settingsText}>
              How many minutes is each moon speed-up?
            </Text>
            <View style={styles.singleInput}>
              <TextInput
                style={styles.constructionInput}
                mode={"outlined"}
                label={"Speed-Up"}
                value={moonMinutes}
                placeholder={"eg. 210"}
                outlineColor={"#720ab9"}
                activeOutlineColor={"#720ab9"}
                textColor={"#c2c2bd"}
                onChangeText={(text) =>
                  setMoonMinutes(text.replace(/[^0-9]/g, ""))
                }
                keyboardType="numeric"
              ></TextInput>
            </View>
          </>
        ) : null}
      </View>
      <Text style={styles.calculatedResult}>
        {!isNotEmpty(calculatedDays) ||
        !isNotEmpty(calculatedHours) ||
        !isNotEmpty(calculatedMinutes) ||
        !isNotEmpty(workers) ? (
          <Text>Still missing some information</Text>
        ) : (
          <Text>
            There are{" "}
            <Text style={{ fontWeight: "bold" }}>
              {isNotEmpty(calculatedDays) ? `${calculatedDays} Days, ` : null}
              {isNotEmpty(calculatedHours)
                ? `${calculatedHours} Hours, `
                : null}
              {isNotEmpty(calculatedMinutes)
                ? `${calculatedMinutes} Minutes`
                : null}{" "}
            </Text>
            left
          </Text>
        )}
      </Text>

      <StatusBar style="light" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screenWrap: {
    flex: 1,
    backgroundColor: "#1a1a16",
  },
  constructionWrap: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  constructionTime: {
    marginTop: 5,
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  singleInput: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  settingsText: {
    marginBottom: 10,
    color: "#c2c2bd",
    textAlign: "center",
  },
  constructionInput: {
    width: "32%",
    backgroundColor: "#1a1a16",
  },
  workersText: {
    marginHorizontal: 10,
    fontSize: 30,
    color: "#f8c820",
  },
  modifyButton: {
    height: 20,
    backgroundColor: "#1a1a16",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#f8c820",
    borderRadius: 0,
  },
  moonToggle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  calculatedResult: {
    marginBottom: 20,
    marginHorizontal: 20,
    padding: 20,
    color: "#c2c2bd",
    textAlign: "center",
    borderWidth: 1,
    borderColor: "#c2c2bd",
  },
});

export default ConstructionCalcScreen;
