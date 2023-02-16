import {
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { StatusBar } from "expo-status-bar";

const HomeScreen = () => {
  const TestData = [
    {
      projectTitle: "Project #1",
      progress: 85,
      theme: "#f8c820",
    },
    {
      projectTitle: "Project #2",
      progress: 35,
      theme: "#c6005f",
    },
    {
      projectTitle: "Project #4",
      progress: 22,
      theme: "#4792ed",
    },
    {
      projectTitle: "Project #4",
      progress: 22,
      theme: "#4792ed",
    },
    {
      projectTitle: "Project #4",
      progress: 22,
      theme: "#4792ed",
    },
    {
      projectTitle: "Project #4",
      progress: 22,
      theme: "#4792ed",
    },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={TestData}
        numColumns={2}
        columnWrapperStyle={{
          top: "-15%",
          paddingHorizontal: "10%",
          justifyContent: "space-between",
        }}
        ListHeaderComponent={
          <View style={styles.header}>
            <ImageBackground
              source={require("../Imgs/Header-Background.jpg")}
              resizeMode="cover"
              style={styles.headerImage}
            />
          </View>
        }
        renderItem={({ item }) => {
          let progressStr = item.progress + "%";

          return (
            <View style={styles.card}>
              <View style={styles.cardIcon}></View>
              <Text style={styles.title}>{item.projectTitle}</Text>
              <Text style={styles.subtitle}>{item.progress}%</Text>
              <View style={styles.progressWrapper}>
                <View
                  style={[
                    styles.progressBar,
                    {
                      width: progressStr,
                      backgroundColor: item.theme,
                    },
                  ]}
                ></View>
              </View>
            </View>
          );
        }}
      />

      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    aspectRatio: 1,
    overflow: "hidden",
  },
  headerImage: {
    height: "100%",
    bottom: 0,
  },
  card: {
    padding: 10,
    marginBottom: 20,
    width: "45%",
    alignItems: "center",
    borderRadius: 7,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: 5,
    elevation: 7,
    overflow: "hidden",
  },
  cardIcon: {
    marginBottom: 10,
    width: "50%",
    aspectRatio: 1,
    backgroundColor: "#fff",
    borderRadius: 999,
    shadowColor: "#000",
    elevation: 7,
  },
  title: {
    opacity: 0.5,
    fontWeight: "bold",
    fontSize: 16,
  },
  subtitle: {
    opacity: 0.5,
    fontWeight: "thin",
    fontSize: 13,
  },
  progressWrapper: {
    marginTop: 15,
    width: "100%",
    height: 5,
    backgroundColor: "#e1e1e1",
    overflow: "hidden",
  },
  progressBar: {
    height: "100%",
  },
});

export default HomeScreen;
