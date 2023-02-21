import { Button, TextInput } from "react-native-paper";
import { ScrollView, StyleSheet, View } from "react-native";
import { useState } from "react";

const DiamondsScreen = () => {
  const [mainDiamonds, setMainDiamonds] = useState("0");
  const [diamonds500, setDiamonds500] = useState("0");
  const [diamonds150, setDiamonds150] = useState("0");
  const [diamonds10, setDiamonds10] = useState("0");
  const [diamonds5, setDiamonds5] = useState("0");
  const [diamonds2, setDiamonds2] = useState("0");

  return (
    <ScrollView style={styles.container}>
      <TextInput
        style={styles.statInput}
        mode={"outlined"}
        label={"Main Diamonds"}
        value={mainDiamonds}
        placeholder={"eg. 14200"}
        activeOutlineColor={"#47656d"}
        onChangeText={(text) => setMainDiamonds(text.replace(/[^0-9]/g, ""))}
        keyboardType="numeric"
      ></TextInput>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screenWrap: {
    flex: 1,
    marginBottom: 10,
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
    marginBottom: 2,
  },
});

export default DiamondsScreen;
