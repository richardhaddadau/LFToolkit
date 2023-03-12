import { Text, View, StyleSheet, TextInput, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import {useState} from "react";

const ConstructionCalcScreen = () => {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);

    const [calculatedDays, setCalculatedDays] = useState(0);
    const [calculatedHours, setCalculatedHours] = useState(0);
    const [calculatedMinutes, setCalculatedMinutes] = useState(0);

    const calculateTime = (currentDays, currentHours, currentMinutes) => {};

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
