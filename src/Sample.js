import React from "react";
import { View, Text } from "react-native";

function Sample({ navigation, route }) {
  const { d } = route.params;
  return (
    <View>
          <Text>HELLO WORLD.....{d}</Text>
    </View>
  );
}

export default Sample;
