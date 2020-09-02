import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
  StatusBar,
  Alert,
  ActivityIndicator,
} from "react-native";
import Prop from "./Prop";
import { AntDesign } from "@expo/vector-icons";
import Details from "./Details";

const ht = Dimensions.get("window").height;
const wd = Dimensions.get("window").width;

function ShoppingCart({ navigation, route }) {
  const [kur, setKur] = useState(0);
  const [amul, setAmul] = useState(0);
  const [chips, setChips] = useState(0);
  const [colddrink, setColdDrink] = useState(0);
  const [maggie, setMaggie] = useState(0);
  const [chocolate, setChocolate] = useState(0);
  const [frooti, setFrooti] = useState(0);
  const [show, setShow] = useState(false);

  var a = [kur, amul, chips, colddrink, maggie, chocolate, frooti];

  const d = route.params;
  // useEffect(() => {
  //   if (d) {
  //     if (d.d == "kurkure") {
  //       setKur(d.quantkur);
  //     } else if (d.d == "amul milk") {
  //       setAmul(0);
  //     } else if (d.d == "uncle chips") {
  //       setChips(d.quantchips);
  //     } else if (d.d == "cold drink") {
  //       setColdDrink(d.quantcold);
  //     } else if (d.d == "maggi") {
  //       setMaggie(d.quantmaggi);
  //     } else if (d.d == "chocolate") {
  //       setChocolate(d.quantchocolate);
  //     } else if (d.d == "frooti") {
  //       setFrooti(d.quantfrooti);
  //     }
  //   }
  // }, []);
  // console.log(d);
  // useEffect(() => {
  //   if (d) {
  //     if (d.d == "kurkure") {
  //       setKur(0);
  //     } else if (d.d == "amul milk") {
  //       setAmul(0);
  //     } else if (d.d == "uncle chips") {
  //       setChips(0);
  //     } else if (d.d == "cold drink") {
  //       setColdDrink(0);
  //     } else if (d.d == "maggi") {
  //       setMaggie(0);
  //     } else if (d.d == "chocolate") {
  //       setChocolate(0);
  //     } else if (d.d == "frooti") {
  //       setFrooti(0);
  //     }
  //   }
  // }, []);
  // console.log(d);
  return (
    <ScrollView>
      {useEffect(() => {
        if (d) {
          if (d.d == "kurkure") {
            setKur(0);
            alert("KurKure is deleted from the Cart");
          } else {
            setKur(d.quantkur);
          }
          if (d.d == "amul milk") {
            setAmul(0);
            alert("Amul Milk is deleted from the Cart");
          } else {
            setAmul(d.quantamul);
          }

          if (d.d == "uncle chips") {
            setChips(0);
            alert("Uncle Chips is deleted from the Cart");
          } else {
            setChips(d.quantchips);
          }

          if (d.d == "cold drink") {
            setColdDrink(0);
            alert("Cold Drink is deleted from the Cart");
          } else {
            setColdDrink(d.quantcold);
          }
          if (d.d == "maggi") {
            setMaggie(0);
            alert("Maggi is deleted from the Cart");
          } else {
            setMaggie(d.quantmaggi);
          }
          if (d.d == "chocolate") {
            setChocolate(0);
            alert("Chocolate is deleted from the Cart");
          } else {
            setChocolate(d.quantchocolate);
          }
          if (d.d == "frooti") {
            setFrooti(0);
            alert("Frooti is deleted from the Cart");
          } else {
            setFrooti(d.quantfrooti);
          }
        }
      }, [])}
      <StatusBar />
      <View style={styles.container}>
        <View
          style={{
            backgroundColor: "red",
            width: wd * 0.5,
            borderRadius: ht * 0.03,
            marginTop: ht * 0.02,
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: ht * 0.04,
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            MY SHOP
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignContent: "space-between",
          }}
        >
          <View
            style={{
              width: wd * 0.3,
              height: ht * 0.14,
              marginTop: ht * 0.025,
              alignContent: "center",
              position: "relative",
              left: wd * 0.35,
            }}
          >
            <Image
              style={{
                width: wd * 0.3,
                height: ht * 0.14,
                borderRadius: ht * 0.07,
              }}
              source={require("../assets/logo.jpg")}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              marginTop: ht * 0.02,
              alignSelf: "flex-end",
              marginLeft: wd * 0.45,
            }}
          >
            <AntDesign
              name="shoppingcart"
              size={wd * 0.25}
              color="black"
              style={{ width: wd * 0.25 }}
            />
            <Text
              style={{
                position: "absolute",
                left: wd * 0.1,
                fontSize: ht * 0.08,
                top: -ht * 0.02,
                color: "red",
              }}
            >
              {a.filter((word) => word > 0).length}
            </Text>
          </View>
        </View>
        {/* Kurkure starts */}

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            width: wd * 1.1,
            marginTop: ht * 0.03,
          }}
        >
          <View>
            <TouchableOpacity
              onPress={() =>
                navigation.push("details", {
                  name: "kurkure",
                  quantitykur: kur,
                  quantityamul: amul,
                  quantitychips: chips,
                  quantitycold: colddrink,
                  quantitymaggi: maggie,
                  quantitychocolate: chocolate,
                  quantityfrooti: frooti,
                  price: 10,
                })
              }
            >
              <Text style={{ fontWeight: "bold", fontSize: ht * 0.02 }}>
                Kurkure Munch:
              </Text>
              <Text style={{ fontWeight: "bold", fontSize: ht * 0.02 }}>
                10Rs
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ paddingLeft: wd * 0.0133 }}>
            <TouchableOpacity
              onPress={() => {
                setKur(kur + 1);
              }}
              style={{ backgroundColor: "purple", borderRadius: ht * 0.013 }}
            >
              <AntDesign name="plus" size={ht * 0.048} color="white" />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => {
                if (kur > 0) {
                  setKur(kur - 1);
                }
              }}
              style={{ backgroundColor: "purple", borderRadius: ht * 0.013 }}
            >
              <AntDesign name="minus" size={ht * 0.048} color="white" />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => {
                setKur(0);
              }}
              style={{
                backgroundColor: "black",
                borderRadius: ht * 0.015,
                width: wd * 0.19,
                height: ht * 0.035,
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  color: "white",
                  textAlign: "center",
                  fontSize: ht * 0.023,
                  marginTop: ht * 0.002,
                }}
              >
                Reset
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: ht * 0.04,
                marginTop: -ht * 0.009,
              }}
            >
              {kur}
            </Text>
          </View>
        </View>
        {/* Kurkure Ends */}
        {/* Amul milk starts */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            width: wd * 1.1,
            marginTop: ht * 0.03,
          }}
        >
          <View>
            <TouchableOpacity
              onPress={() =>
                navigation.push("details", {
                  name: "amul milk",
                  quantitykur: kur,
                  quantityamul: amul,
                  quantitychips: chips,
                  quantitycold: colddrink,
                  quantitymaggi: maggie,
                  quantitychocolate: chocolate,
                  quantityfrooti: frooti,
                  price: 20,
                })
              }
            >
              <Text style={{ fontWeight: "bold", fontSize: ht * 0.02 }}>
                Amul Milk :
              </Text>
              <Text style={{ fontWeight: "bold", fontSize: ht * 0.02 }}>
                20Rs
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ paddingLeft: wd * 0.097 }}>
            <TouchableOpacity
              onPress={() => {
                setAmul(amul + 1);
              }}
              style={{ backgroundColor: "purple", borderRadius: ht * 0.013 }}
            >
              <AntDesign name="plus" size={ht * 0.048} color="white" />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => {
                if (amul > 0) setAmul(amul - 1);
              }}
              style={{ backgroundColor: "purple", borderRadius: ht * 0.013 }}
            >
              <AntDesign name="minus" size={ht * 0.048} color="white" />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => {
                setAmul(0);
              }}
              style={{
                backgroundColor: "black",
                borderRadius: ht * 0.015,
                width: wd * 0.19,
                height: ht * 0.035,
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  color: "white",
                  textAlign: "center",
                  fontSize: ht * 0.023,
                  marginTop: ht * 0.002,
                }}
              >
                Reset
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: ht * 0.04,
                marginTop: -ht * 0.009,
              }}
            >
              {amul}
            </Text>
          </View>
        </View>
        {/* Amul milk Ends */}

        {/* Chips starts */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            width: wd * 1.1,
            marginTop: ht * 0.03,
          }}
        >
          <View>
            <TouchableOpacity
              onPress={() =>
                navigation.push("details", {
                  name: "uncle chips",
                  quantitykur: kur,
                  quantityamul: amul,
                  quantitychips: chips,
                  quantitycold: colddrink,
                  quantitymaggi: maggie,
                  quantitychocolate: chocolate,
                  quantityfrooti: frooti,
                  price: 15,
                })
              }
            >
              <Text style={{ fontWeight: "bold", fontSize: ht * 0.02 }}>
                Uncle Chips :
              </Text>
              <Text style={{ fontWeight: "bold", fontSize: ht * 0.02 }}>
                15Rs
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ paddingLeft: wd * 0.065 }}>
            <TouchableOpacity
              onPress={() => {
                setChips(chips + 1);
              }}
              style={{ backgroundColor: "purple", borderRadius: ht * 0.013 }}
            >
              <AntDesign name="plus" size={ht * 0.048} color="white" />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => {
                if (chips > 0) setChips(chips - 1);
              }}
              style={{ backgroundColor: "purple", borderRadius: ht * 0.013 }}
            >
              <AntDesign name="minus" size={ht * 0.048} color="white" />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => {
                setChips(0);
              }}
              style={{
                backgroundColor: "black",
                borderRadius: ht * 0.015,
                width: wd * 0.19,
                height: ht * 0.035,
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  color: "white",
                  textAlign: "center",
                  fontSize: ht * 0.023,
                  marginTop: ht * 0.002,
                }}
              >
                Reset
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: ht * 0.04,
                marginTop: -ht * 0.009,
              }}
            >
              {chips}
            </Text>
          </View>
        </View>
        {/* Chips Ends */}

        {/* ColdDrinks Starts */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            width: wd * 1.1,
            marginTop: ht * 0.03,
          }}
        >
          <View>
            <TouchableOpacity
              onPress={() =>
                navigation.push("details", {
                  name: "cold drink",
                  quantitykur: kur,
                  quantityamul: amul,
                  quantitychips: chips,
                  quantitycold: colddrink,
                  quantitymaggi: maggie,
                  quantitychocolate: chocolate,
                  quantityfrooti: frooti,
                  price: 20,
                })
              }
            >
              <Text style={{ fontWeight: "bold", fontSize: ht * 0.02 }}>
                Cold Drinks :
              </Text>
              <Text style={{ fontWeight: "bold", fontSize: ht * 0.02 }}>
                20Rs
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ paddingLeft: wd * 0.074 }}>
            <TouchableOpacity
              onPress={() => {
                setColdDrink(colddrink + 1);
              }}
              style={{ backgroundColor: "purple", borderRadius: ht * 0.013 }}
            >
              <AntDesign name="plus" size={ht * 0.048} color="white" />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => {
                if (colddrink > 0) setColdDrink(colddrink - 1);
              }}
              style={{ backgroundColor: "purple", borderRadius: ht * 0.013 }}
            >
              <AntDesign name="minus" size={ht * 0.048} color="white" />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => {
                setColdDrink(0);
              }}
              style={{
                backgroundColor: "black",
                borderRadius: ht * 0.015,
                width: wd * 0.19,
                height: ht * 0.035,
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  color: "white",
                  textAlign: "center",
                  fontSize: ht * 0.023,
                  marginTop: ht * 0.002,
                }}
              >
                Reset
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: ht * 0.04,
                marginTop: -ht * 0.009,
              }}
            >
              {colddrink}
            </Text>
          </View>
        </View>
        {/* cold Drinks End */}

        {/* Maggie Starts */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            width: wd * 1.1,
            marginTop: ht * 0.03,
          }}
        >
          <View>
            <TouchableOpacity
              onPress={() =>
                navigation.push("details", {
                  name: "maggi",
                  quantitykur: kur,
                  quantityamul: amul,
                  quantitychips: chips,
                  quantitycold: colddrink,
                  quantitymaggi: maggie,
                  quantitychocolate: chocolate,
                  quantityfrooti: frooti,
                  price: 12,
                })
              }
            >
              <Text style={{ fontWeight: "bold", fontSize: ht * 0.02 }}>
                Maggie :
              </Text>
              <Text style={{ fontWeight: "bold", fontSize: ht * 0.02 }}>
                12Rs
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ paddingLeft: wd * 0.14 }}>
            <TouchableOpacity
              onPress={() => {
                setMaggie(maggie + 1);
              }}
              style={{ backgroundColor: "purple", borderRadius: ht * 0.013 }}
            >
              <AntDesign name="plus" size={ht * 0.048} color="white" />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => {
                if (maggie > 0) setMaggie(maggie - 1);
              }}
              style={{ backgroundColor: "purple", borderRadius: ht * 0.013 }}
            >
              <AntDesign name="minus" size={ht * 0.048} color="white" />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => {
                setMaggie(0);
              }}
              style={{
                backgroundColor: "black",
                borderRadius: ht * 0.015,
                width: wd * 0.19,
                height: ht * 0.035,
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  color: "white",
                  textAlign: "center",
                  fontSize: ht * 0.023,
                  marginTop: ht * 0.002,
                }}
              >
                Reset
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: ht * 0.04,
                marginTop: -ht * 0.009,
              }}
            >
              {maggie}
            </Text>
          </View>
        </View>
        {/* Maggie Ends */}

        {/* Chocolate Starts */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            width: wd * 1.1,
            marginTop: ht * 0.03,
          }}
        >
          <View>
            <TouchableOpacity
              onPress={() =>
                navigation.push("details", {
                  name: "chocolate",
                  quantitykur: kur,
                  quantityamul: amul,
                  quantitychips: chips,
                  quantitycold: colddrink,
                  quantitymaggi: maggie,
                  quantitychocolate: chocolate,
                  quantityfrooti: frooti,
                  price: 40,
                })
              }
            >
              <Text style={{ fontWeight: "bold", fontSize: ht * 0.02 }}>
                Silk Chocolate :
              </Text>
              <Text style={{ fontWeight: "bold", fontSize: ht * 0.02 }}>
                40Rs
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ paddingLeft: wd * 0.02 }}>
            <TouchableOpacity
              onPress={() => {
                setChocolate(chocolate + 1);
              }}
              style={{ backgroundColor: "purple", borderRadius: ht * 0.013 }}
            >
              <AntDesign name="plus" size={ht * 0.048} color="white" />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => {
                if (chocolate > 0) setChocolate(chocolate - 1);
              }}
              style={{ backgroundColor: "purple", borderRadius: ht * 0.013 }}
            >
              <AntDesign name="minus" size={ht * 0.048} color="white" />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => {
                setChocolate(0);
              }}
              style={{
                backgroundColor: "black",
                borderRadius: ht * 0.015,
                width: wd * 0.19,
                height: ht * 0.035,
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  color: "white",
                  textAlign: "center",
                  fontSize: ht * 0.023,
                  marginTop: ht * 0.002,
                }}
              >
                Reset
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: ht * 0.04,
                marginTop: -ht * 0.009,
              }}
            >
              {chocolate}
            </Text>
          </View>
        </View>
        {/* Chocolate Ends */}

        {/* Frooti Starts */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            width: wd * 1.1,
            marginTop: ht * 0.03,
          }}
        >
          <View>
            <TouchableOpacity
              onPress={() =>
                navigation.push("details", {
                  name: "frooti",
                  quantitykur: kur,
                  quantityamul: amul,
                  quantitychips: chips,
                  quantitycold: colddrink,
                  quantitymaggi: maggie,
                  quantitychocolate: chocolate,
                  quantityfrooti: frooti,
                  price: 10,
                })
              }
            >
              <Text style={{ fontWeight: "bold", fontSize: ht * 0.02 }}>
                Frooti :
              </Text>
              <Text style={{ fontWeight: "bold", fontSize: ht * 0.02 }}>
                10Rs
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{ paddingLeft: wd * 0.165 }}>
            <TouchableOpacity
              onPress={() => {
                setFrooti(frooti + 1);
              }}
              style={{ backgroundColor: "purple", borderRadius: ht * 0.013 }}
            >
              <AntDesign name="plus" size={ht * 0.048} color="white" />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => {
                if (frooti > 0) setFrooti(frooti - 1);
              }}
              style={{ backgroundColor: "purple", borderRadius: ht * 0.013 }}
            >
              <AntDesign name="minus" size={ht * 0.048} color="white" />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => {
                setFrooti(0);
              }}
              style={{
                backgroundColor: "black",
                borderRadius: ht * 0.015,
                width: wd * 0.19,
                height: ht * 0.035,
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  color: "white",
                  textAlign: "center",
                  fontSize: ht * 0.023,
                  marginTop: ht * 0.002,
                }}
              >
                Reset
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: ht * 0.04,
                marginTop: -ht * 0.009,
              }}
            >
              {frooti}
            </Text>
          </View>
        </View>
        {/* Frooti Ends */}
        {/* Reset All Starts */}
        <View
          style={{
            alignSelf: "flex-start",
            marginTop: ht * 0.02,
            marginLeft: wd * 0.02,
          }}
        >
          <TouchableOpacity
            onPress={() => {
              Alert.alert(
                "Warning",
                "Are You Sure, You Want to delete all items from Cart?",
                [
                  {
                    text: "Cancel",
                    style: "cancel",
                  },
                  {
                    text: "OK",
                    onPress: () => {
                      setKur(0);
                      setAmul(0);
                      setChips(0);
                      setChocolate(0);
                      setColdDrink(0);
                      setFrooti(0);
                      setMaggie(0);
                    },
                  },
                ]
              );
            }}
            style={{
              backgroundColor: "tomato",
              width: wd * 0.23,
              borderRadius: ht * 0.03,
              height: ht * 0.04,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                color: "white",
                marginTop: ht * 0.006,
                fontWeight: "bold",
                fontSize: ht * 0.02,
              }}
            >
              Reset All
            </Text>
          </TouchableOpacity>
        </View>
        {/* Reset All Ends */}

        {/* Total Items Starts */}
        <View
          style={{
            borderTopWidth: wd * 0.004,
            alignSelf: "flex-end",
            marginRight: wd * 0.04,
            position: "relative",
            top: -ht * 0.04,
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: ht * 0.03 }}>
            Total Items :{" "}
            {kur + amul + chips + chocolate + maggie + frooti + colddrink}
          </Text>
        </View>
        {/* Total Items ends */}

        {/* show Cost Starts */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              alignContent: "space-between",
              borderRadius: ht * 0.02,
              width: wd * 0.35,
              marginBottom: ht * 0.01,
              backgroundColor: "black",
              marginLeft: -wd * 0.01,
              marginRight: wd * 0.1,
            }}
          >
            <TouchableOpacity onPress={() => setShow(true)}>
              <Text
                style={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: ht * 0.03,
                  textAlign: "center",
                }}
              >
                Show Cost
              </Text>
            </TouchableOpacity>
          </View>
          {show ? (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignContent: "space-between",
                borderWidth: wd * 0.004,
                borderRadius: ht * 0.02,
                width: wd * 0.5,
                marginBottom: ht * 0.009,
              }}
            >
              <Text
                style={{
                  color: "purple",
                  fontWeight: "bold",
                  fontSize: ht * 0.03,
                }}
              >
                Total Cost :
              </Text>
              <Text
                style={{
                  color: "purple",
                  fontWeight: "bold",
                  fontSize: ht * 0.03,
                }}
              >
                {kur * 10 +
                  amul * 20 +
                  chips * 15 +
                  colddrink * 20 +
                  maggie * 12 +
                  chocolate * 40 +
                  frooti * 10}
              </Text>
            </View>
          ) : null}
        </View>
        <View
          style={{
            alignContent: "space-between",
            borderRadius: ht * 0.02,
            width: wd * 0.35,
            marginTop: ht * 0.02,
            marginBottom: ht * 0.02,
            backgroundColor: "black",
            marginLeft: -wd * 0.01,
            marginRight: wd * 0.1,
          }}
        >
          <TouchableOpacity onPress={() => setShow(false)}>
            <Text
              style={{
                color: "white",
                fontWeight: "bold",
                fontSize: ht * 0.03,
                textAlign: "center",
              }}
            >
              Hide Cost
            </Text>
          </TouchableOpacity>
        </View>
        {/* <Prop name="shubham sharma" col="purple" /> */}
        {/* <Prop name="Amit Sharma" /> */}
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#D3978A",
    alignItems: "center",
    justifyContent: "center",
    //marginTop: ht * 0.005,
    elevation: 10,
    // borderRadius: ht * 0.02,
    // marginBottom: ht * 0.04,
  },
});
export default ShoppingCart;
