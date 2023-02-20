import HomeScreen from "../Screens/HomeScreen";
import ConstructionCalcScreen from "../Screens/ConstructionCalcScreen";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tabs = createBottomTabNavigator();

const BottomTabs = () => {
  const animationConfig = {};
  return (
    <Tabs.Navigator
      initialRouteName="Projects"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#47656d",
        },
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name={"Projects"}
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <MaterialCommunityIcons name="cards" size={26} color="white" />
            ) : (
              <MaterialCommunityIcons
                name="cards-outline"
                size={22}
                color="#b5c1c5"
              />
            ),
        }}
      />
      <Tabs.Screen
        name={"Construction Calculator"}
        component={ConstructionCalcScreen}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons name="ios-calculator" size={26} color="white" />
            ) : (
              <Ionicons name="calculator-outline" size={22} color="#b5c1c5" />
            ),
        }}
      />
    </Tabs.Navigator>
  );
};

export default BottomTabs;
