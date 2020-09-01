import React from "react";
import { View, Text, ActivityIndicator } from "react-native";

function Sample({ navigation, route }) {
  const { d } = route.params;
  return (
    <View>
      <Text>HELLO WORLD.....{d}</Text>
      <ActivityIndicator />
    </View>
  );
}

export default Sample;
