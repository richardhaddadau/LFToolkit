import { View, Text, Pressable, StyleSheet, ScrollView } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";

const StatisticsScreen = ({ navigation }) => {
  const [stone, setStone] = useState("");
  const [iron, setIron] = useState("");
  const [zCoins, setZCoins] = useState("");
  const [diamonds, setDiamonds] = useState("");

  return (
    <SafeAreaView style={styles.screenWrap}>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-sharp" size={24} color="black" />
        </Pressable>
        <Text style={styles.headerTitle}>Statistics</Text>
      </View>

      <ScrollView style={styles.container}>
        <TextInput
          style={styles.statInput}
          mode={"outlined"}
          label={"Stone"}
          value={stone}
          placeholder={"eg. 12500"}
          activeOutlineColor={"#47656d"}
          onChangeText={(text) => setStone(text)}
        ></TextInput>
        <TextInput
          style={styles.statInput}
          mode={"outlined"}
          label={"Iron"}
          value={iron}
          placeholder={"eg. 7200"}
          activeOutlineColor={"#47656d"}
          onChangeText={(text) => setIron(text)}
        ></TextInput>
        <TextInput
          style={styles.statInput}
          mode={"outlined"}
          label={"Z Coins"}
          value={zCoins}
          placeholder={"eg. 22300"}
          activeOutlineColor={"#47656d"}
          onChangeText={(text) => setZCoins(text)}
        ></TextInput>
        <TextInput
          style={styles.statInput}
          mode={"outlined"}
          label={"Diamonds"}
          value={diamonds}
          placeholder={"eg. 4100"}
          activeOutlineColor={"#47656d"}
          onChangeText={(text) => setDiamonds(text)}
        ></TextInput>
        <Button icon={"content-save"} mode={"contained"}>
          Save
        </Button>
      </ScrollView>
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
});

export default StatisticsScreen;
