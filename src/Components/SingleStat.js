import { Text, View, StyleSheet } from "react-native";
import { GiStoneBlock, GiTwoCoins, GiCutDiamond } from "react-icons/gi";

import { AiTwotoneGold } from "react-icons/ai";

const SingleStat = ({ description, data }) => {
  const thousandsSeparator = Intl.NumberFormat("en-us");
  let iconComponent;

  switch (description) {
    case "Stone":
      iconComponent = <GiStoneBlock size={20} color={"white"} />;
      return;

    case "Iron":
      iconComponent = <AiTwotoneGold size={20} color={"white"} />;
      return;

    case "Z Coins":
      iconComponent = <GiTwoCoins size={20} color={"white"} />;
      return;

    case "Diamonds":
      iconComponent = <GiCutDiamond size={20} color={"white"} />;
      return;

    default:
      iconComponent = <GiStoneBlock />;
  }

  return (
    <View style={styles.statSingle}>
      {/*{iconComponent}*/}
      <GiStoneBlock size={20} color={"white"} />
      <Text style={styles.statQuantity}>{thousandsSeparator.format(data)}</Text>
      <Text style={styles.statDescription}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  statSingle: {
    marginVertical: 5,
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  statQuantity: {
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
