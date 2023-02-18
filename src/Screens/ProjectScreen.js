import { Text, View, StyleSheet } from "react-native";
// import { IoIosArrowBack } from "react-icons/all";

const ProjectScreen = ({ route, navigation }) => {
  const { projectId } = route.params;

  return (
    <View style={styles.screenWrap}>
      <View style={styles.projectHeader}>
        {/*<IoIosArrowBack size={12} />*/}
        <Text>{projectId}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screenWrap: {
    flex: 1,
    backgroundColor: "red",
  },
  projectHeader: {
    justifyContent: "space-between",
    backgroundColor: "blue",
  },
});

export default ProjectScreen;
