import React, { useState, useEffect } from "react";
import { View, Text, Image, Dimensions, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import ShoppingCart from "./ShoppingCart";
const ht = Dimensions.get("window").height;
const wd = Dimensions.get("window").width;

function Details({ navigation, route }) {
  const [item, setItem] = useState(null);
  const [quan, SetQuan] = useState(0);
  const { name } = route.params;
  const { quantitykur } = route.params;
  const { quantityamul } = route.params;
  const { quantitychips } = route.params;
  const { quantitycold } = route.params;
  const { quantitymaggi } = route.params;
  const { quantitychocolate } = route.params;
  const { quantityfrooti } = route.params;
  const { price } = route.params;

  useEffect(() => {
    if (name == "kurkure") {
      setItem(require("../assets/kurkure.jpg"));
      SetQuan(quantitykur)
    } else if (name == "amul milk") {
      setItem(require("../assets/amul.jpg"));
      SetQuan(quantityamul);
    } else if (name == "uncle chips") {
      setItem(require("../assets/uncle.jpeg"));
      SetQuan(quantitychips);
    } else if (name == "cold drink") {
      setItem(require("../assets/cold.jpg"));
      SetQuan(quantitycold);
    } else if (name == "maggi") {
      setItem(require("../assets/maggi.jpg"));
      SetQuan(quantitymaggi);
    } else if (name == "chocolate") {
      setItem(require("../assets/silk.jpeg"));
      SetQuan(quantitychocolate);
    } else if (name == "frooti") {
      setItem(require("../assets/frooti.jpg"));
      SetQuan(quantityfrooti);
    }
  }, []);

  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <View
          style={{
            alignSelf: "center",
            marginTop: ht * 0.02,
            marginBottom: ht * 0.02,
          }}
        >
          <Text style={styles.heading}> Product : {name.toUpperCase()}</Text>
        </View>
        <View style={{ alignSelf: "center" }}>
          <Image
            style={{
              width: wd * 0.8,
              height: ht * 0.5,
              borderRadius: ht * 0.02,
            }}
            source={item}
          />
        </View>
        <View
          style={{
            alignSelf: "center",
            marginTop: ht * 0.04,
            marginBottom: ht * 0.04,
          }}
        >
          <Text style={styles.Text}>Price Of Product : {price} Rs</Text>
          <Text style={styles.Text}>Quantity Selected : {quan}</Text>
          <Text style={styles.Text}>Total Cost : {quan * price} Rs</Text>
        </View>
        <View
          style={{
            width: wd * 0.34,
            alignSelf: "flex-end",
            marginRight: wd * 0.025,
            marginBottom: ht * 0.02,
            height: ht * 0.05,
          }}
        >
          <TouchableOpacity
            onPress={() => {
              navigation.push("shoppingcart", {
                d: name,
                quantkur: quantitykur,
                quantamul: quantityamul,
                quantchips: quantitychips,
                quantcold: quantitycold,
                quantmaggi: quantitymaggi,
                quantchocolate: quantitychocolate,
                quantfrooti : quantityfrooti,
              });
              // navigation.navigate("shoppingcart");
            }}
            style={{
              backgroundColor: "black",
              borderRadius: ht * 0.02,
              height: ht * 0.04,
            }}
          >
            <Text
              style={{
                color: "white",
                fontWeight: "bold",
                fontSize: ht * 0.02,
                textAlign: "center",
                marginTop: ht * 0.004,
              }}
            >
              Delete from cart
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "purple",
    justifyContent: "center",
    alignContent: "center",
    borderRadius: ht * 0.02,
    width: wd * 0.92,
    marginLeft: wd * 0.04,
    marginTop: ht * 0.02,
    marginBottom: ht * 0.02,
  },
  Text: {
    color: "white",
    fontWeight: "bold",
    fontSize: ht * 0.025,
    // textAlign: "center",
  },
  heading: {
    color: "white",
    fontWeight: "bold",
    fontSize: ht * 0.04,
    // textAlign: "center",
  },
  main: {
    backgroundColor: "lightgrey",
  },
});
export default Details;
