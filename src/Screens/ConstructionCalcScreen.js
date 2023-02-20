import { Text, View, StyleSheet, TextInput, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";

const ConstructionCalcScreen = () => {
  return (
    <SafeAreaView style={styles.screenWrap}>
      <Text>Construction Calc</Text>

      <View style={styles.constructionTime}>
        <TextInput placeholder="hours" />
        <TextInput placeholder="minutes" />
      </View>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screenWrap: {
    flex: 1,
  },
  constructionTime: {},
});

export default ConstructionCalcScreen;
