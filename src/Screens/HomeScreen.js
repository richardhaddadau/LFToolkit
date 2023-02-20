import {
  FlatList,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import SingleStat from "../Components/SingleStat";
import {
  AntDesign,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const HomeScreen = ({ navigation }) => {
  const TestData = [
    {
      id: 1,
      projectTitle: "Project #1",
      progress: 85,
      theme: "#f8c820",
    },
    {
      id: 2,
      projectTitle: "Project #2",
      progress: 35,
      theme: "#c6005f",
    },
    {
      id: 3,
      projectTitle: "Project #3",
      progress: 22,
      theme: "#4792ed",
    },
    {
      id: 4,
      projectTitle: "Project #4",
      progress: 22,
      theme: "#4792ed",
    },
    {
      id: 5,
      projectTitle: "Project #5",
      progress: 22,
      theme: "#4792ed",
    },
    {
      projectTitle: "Project #6",
      progress: 22,
      theme: "#4792ed",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={TestData}
        numColumns={2}
        columnWrapperStyle={{
          top: "-15%",
          paddingHorizontal: "10%",
          justifyContent: "space-between",
        }}
        ListHeaderComponent={
          <SafeAreaView style={styles.header}>
            <ImageBackground
              source={require("../../assets/Imgs/Header-Background.jpg")}
              resizeMode="cover"
              style={styles.headerImage}
            >
              <View style={styles.headerPanel}>
                <Text style={styles.greeting}>Hi Edmodantes</Text>
                <View style={styles.statPanel}>
                  <Text
                    style={{
                      marginTop: 15,
                      marginBottom: 5,
                      fontSize: 16,
                      color: "white",
                    }}
                  >
                    Current Statistics:
                  </Text>
                  <SingleStat data={12000} description={"Stone"} />
                  <SingleStat data={87400} description={"Iron"} />
                  <SingleStat data={21000} description={"Z Coins"} />
                  <SingleStat data={11100} description={"Diamonds"} />
                </View>

                <TouchableWithoutFeedback
                  onPress={() => navigation.navigate("Statistics")}
                >
                  <View style={{ position: "absolute", right: 20, bottom: 15 }}>
                    <MaterialCommunityIcons
                      name="pencil-box"
                      size={30}
                      color="white"
                    />
                  </View>
                </TouchableWithoutFeedback>
              </View>

              <View
                style={{
                  marginTop: 10,
                  paddingRight: 20,
                  alignItems: "flex-end",
                }}
              >
                <AntDesign name="plussquare" size={30} color="white" />
              </View>
            </ImageBackground>
          </SafeAreaView>
        }
        renderItem={({ item }) => {
          let progressStr = item.progress + "%";

          return (
            <TouchableWithoutFeedback
              key={item.id}
              onPress={() =>
                navigation.navigate("Project", {
                  projectItem: item,
                })
              }
            >
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
            </TouchableWithoutFeedback>
          );
        }}
      />

      <StatusBar style="auto" />
    </SafeAreaView>
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
  headerPanel: {
    marginTop: "10%",
    paddingVertical: 15,
    paddingHorizontal: 20,
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.65)",
    zIndex: 10,
    elevation: 2,
  },
  greeting: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  card: {
    padding: 10,
    marginBottom: 20,
    width: "45%",
    alignItems: "center",
    borderRadius: 7,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: 7,
    shadowRadius: 6,
    shadowOpacity: 1,
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
    // shadowOffset: 5,
    shadowRadius: 4,
    shadowOpacity: 0.25,
    elevation: 7,
  },
  title: {
    opacity: 0.5,
    fontWeight: "bold",
    fontSize: 15,
  },
  subtitle: {
    opacity: 0.5,
    fontWeight: "thin",
    fontSize: 12,
  },
  progressWrapper: {
    marginTop: 15,
    width: "100%",
    height: 7,
    backgroundColor: "#e1e1e1",
    borderRadius: 10,
    overflow: "hidden",
  },
  progressBar: {
    height: "100%",
  },
});

export default HomeScreen;
