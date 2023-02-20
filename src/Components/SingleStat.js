import { Text, View, StyleSheet } from "react-native";
// import { GiStoneBlock, GiTwoCoins, GiCutDiamond } from "react-icons/gi";

import { AiTwotoneGold } from "react-icons/ai";
import {
  Entypo,
  FontAwesome,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const SingleStat = ({ description, data }) => {
  // const thousandsSeparator = Intl.NumberFormat("en-us");

  let iconComponent;

  switch (description) {
    case "Stone":
      iconComponent = <Entypo name="basecamp" size={18} color="white" />;
      break;

    case "Iron":
      iconComponent = (
        <MaterialCommunityIcons name="gold" size={24} color="white" />
      );
      break;

    case "Z Coins":
      iconComponent = <FontAwesome5 name="coins" size={18} color="white" />;
      break;

    case "Diamonds":
      iconComponent = <FontAwesome name="diamond" size={18} color="white" />;
      break;
  }

  return (
    <View style={styles.statSingle}>
      {iconComponent}
      {/*<GiStoneBlock size={20} color={"white"} />*/}
      <Text style={styles.statQuantity}>{data}</Text>
      <Text style={styles.statDescription}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  statSingle: {
    marginVertical: 5,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  statQuantity: {
    marginLeft: 10,
    marginRight: 5,
    fontSize: 17,
    fontWeight: "bold",
    color: "white",
  },
  statDescription: {
    fontSize: 15,
    fontWeight: "light",
    color: "white",
  },
});

export default SingleStat;
