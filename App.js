import React from "react";
import { StyleSheet, Text, View, ckickable } from "react-native";
import ShoppingCart from "./src/ShoppingCart";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Details from "./src/Details";
import Sample from "./src/Sample";

const Stack = createStackNavigator();
function App() {
  return (
    // <View style={styles.container}>
    //   <ShoppingCart />
    //initialRouteName="shoppingcart"
    // </View>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="shoppingcart"
          component={ShoppingCart}
          options={{
            title: "Shopping Cart",
            headerStyle: {
              backgroundColor: "tomato",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
              textAlign: "center",
            },
          }}
        />
        <Stack.Screen
          name="details"
          component={Details}
          options={{
            title: "Product Details",
            headerStyle: {
              backgroundColor: "tomato",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          
          }}
        />
        <Stack.Screen name="sample" component={Sample} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
export default App;
