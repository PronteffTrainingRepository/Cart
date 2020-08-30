import React from "react";
import { View, Text } from "react-native";

function Prop(props) {
  return (
    <View>
      <Text style={{ color: "black", fontSize: 16, fontWeight: "bold" }}>
        Hello, I am {props.name}
      </Text>
    </View>
  );
}

export default Prop;
