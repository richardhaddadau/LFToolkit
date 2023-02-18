import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import ProjectsScreen from "../Screens/HomeScreen";
import { FaCalculator } from "react-icons/all";

const Tabs = createMaterialBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tabs.Navigator
      barStyle={{
        backgroundColor: "#212121",
      }}
    >
      <Tabs.Screen name={"Projects"} component={ProjectsScreen} />
      <Tabs.Screen
        name={"Construction Calculator"}
        component={ProjectsScreen}
      />
    </Tabs.Navigator>
  );
};

export default BottomTabs;
