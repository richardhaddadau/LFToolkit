import { Text, View, StyleSheet, Pressable, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
// import { IoIosArrowBack } from "react-icons/all";

const ProjectScreen = ({ route, navigation }) => {
  const { projectItem } = route.params;

  return (
    <SafeAreaView style={styles.screenWrap}>
      <View style={styles.projectHeader}>
        <Pressable onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-sharp" size={24} color="black" />
        </Pressable>
        <Text style={styles.headerTitle}>{projectItem.projectTitle}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screenWrap: {
    flex: 1,
    backgroundColor: "white",
  },
  projectHeader: {
    paddingVertical: 20,
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "white",
  },
  headerTitle: {
    marginLeft: 30,
    fontSize: 20,
  },
});

export default ProjectScreen;
