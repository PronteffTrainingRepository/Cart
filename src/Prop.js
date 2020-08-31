import React from "react";
import { View, Text, Dimensions } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const wd = Dimensions.get("window").width;
const ht = Dimensions.get("window").height;
function Prop(props) {
  return (
    <View style={{ flexDirection: "row" }}>
      <FontAwesome
        name="user"
        size={ht * 0.03}
        color="tomato"
        style={{ marginRight: wd * 0.02 }}
      />
      <Text
        style={{
          color: props.col,
          fontSize: ht * 0.025,
          fontWeight: "bold",
          marginBottom: ht * 0.02,
        }}
      >
        Hello, I am {props.name}
      </Text>
    </View>
  );
}

export default Prop;
