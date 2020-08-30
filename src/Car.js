import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import Prop from './Prop'
import { AntDesign } from "@expo/vector-icons";
function Car() {
  const [kur, setKur] = useState(0);
  const [amul, setAmul] = useState(0);
  const [chips, setChips] = useState(0);
  const [colddrink, setColdDrink] = useState(0);
  const [maggie, setMaggie] = useState(0);
  const [chocolate, setChocolate] = useState(0);
  const [frooti, setFrooti] = useState(0);
  const [show, setShow] = useState(false);

  var a = [kur, amul, chips, colddrink, maggie, chocolate, frooti];

  return (
    <ScrollView>
      <View style={styles.container}>
        <View
          style={{
            backgroundColor: "red",
            width: 200,
            borderRadius: 20,
            marginTop: 10,
          }}
        >
          <Text style={{ color: "white", fontSize: 30, textAlign: "center" }}>
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
              width: 100,
              height: 100,
              marginTop: 10,
              alignContent: "center",
              position: "relative",
              left: 120,
            }}
          >
            <Image
              style={{ width: 100, height: 100, borderRadius: 50 }}
              source={require("../assets/logo.jpg")}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              marginTop: 10,
              alignSelf: "flex-end",
              marginLeft: 160,
            }}
          >
            <AntDesign
              name="shoppingcart"
              size={84}
              color="black"
              style={{ width: 84 }}
            />
            <Text
              style={{
                position: "absolute",
                left: 34,
                fontSize: 53,
                top: -12,
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
            width: 400,
            marginTop: 20,
          }}
        >
          <View>
            <Text style={{ fontWeight: "bold" }}>Kurkure Munch:</Text>
            <Text style={{ fontWeight: "bold" }}>10Rs</Text>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => {
                setKur(kur + 1);
              }}
              style={{ backgroundColor: "purple", borderRadius: 10 }}
            >
              <AntDesign name="plus" size={34} color="white" />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => {
                if (kur > 0) {
                  setKur(kur - 1);
                }
              }}
              style={{ backgroundColor: "purple", borderRadius: 10 }}
            >
              <AntDesign name="minus" size={34} color="white" />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => {
                setKur(0);
              }}
              style={{
                backgroundColor: "black",
                borderRadius: 10,
                width: 60,
                height: 24,
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  color: "white",
                  textAlign: "center",
                  fontSize: 16,
                }}
              >
                Reset
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={{ fontWeight: "bold", fontSize: 30, marginTop: -8 }}>
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
            width: 400,
            marginTop: 20,
          }}
        >
          <View>
            <Text style={{ fontWeight: "bold" }}>Amul Milk :</Text>
            <Text style={{ fontWeight: "bold" }}>20Rs</Text>
          </View>
          <View style={{ paddingLeft: 26 }}>
            <TouchableOpacity
              onPress={() => {
                setAmul(amul + 1);
              }}
              style={{ backgroundColor: "purple", borderRadius: 10 }}
            >
              <AntDesign name="plus" size={34} color="white" />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => {
                if (amul > 0) setAmul(amul - 1);
              }}
              style={{ backgroundColor: "purple", borderRadius: 10 }}
            >
              <AntDesign name="minus" size={34} color="white" />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => {
                setAmul(0);
              }}
              style={{
                backgroundColor: "black",
                borderRadius: 10,
                width: 60,
                height: 24,
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  color: "white",
                  textAlign: "center",
                  fontSize: 16,
                }}
              >
                Reset
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={{ fontWeight: "bold", fontSize: 30, marginTop: -8 }}>
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
            width: 400,
            marginTop: 20,
          }}
        >
          <View>
            <Text style={{ fontWeight: "bold" }}>Uncle Chips :</Text>
            <Text style={{ fontWeight: "bold" }}>15Rs</Text>
          </View>
          <View style={{ paddingLeft: 15 }}>
            <TouchableOpacity
              onPress={() => {
                setChips(chips + 1);
              }}
              style={{ backgroundColor: "purple", borderRadius: 10 }}
            >
              <AntDesign name="plus" size={34} color="white" />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => {
                if (chips > 0) setChips(chips - 1);
              }}
              style={{ backgroundColor: "purple", borderRadius: 10 }}
            >
              <AntDesign name="minus" size={34} color="white" />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => {
                setChips(0);
              }}
              style={{
                backgroundColor: "black",
                borderRadius: 10,
                width: 60,
                height: 24,
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  color: "white",
                  textAlign: "center",
                  fontSize: 16,
                }}
              >
                Reset
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={{ fontWeight: "bold", fontSize: 30, marginTop: -8 }}>
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
            width: 400,
            marginTop: 20,
          }}
        >
          <View>
            <Text style={{ fontWeight: "bold" }}>Cold Drinks :</Text>
            <Text style={{ fontWeight: "bold" }}>20Rs</Text>
          </View>
          <View style={{ paddingLeft: 20 }}>
            <TouchableOpacity
              onPress={() => {
                setColdDrink(colddrink + 1);
              }}
              style={{ backgroundColor: "purple", borderRadius: 10 }}
            >
              <AntDesign name="plus" size={34} color="white" />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => {
                if (colddrink > 0) setColdDrink(colddrink - 1);
              }}
              style={{ backgroundColor: "purple", borderRadius: 10 }}
            >
              <AntDesign name="minus" size={34} color="white" />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => {
                setColdDrink(0);
              }}
              style={{
                backgroundColor: "black",
                borderRadius: 10,
                width: 60,
                height: 24,
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  color: "white",
                  textAlign: "center",
                  fontSize: 16,
                }}
              >
                Reset
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={{ fontWeight: "bold", fontSize: 30, marginTop: -8 }}>
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
            width: 400,
            marginTop: 20,
          }}
        >
          <View>
            <Text style={{ fontWeight: "bold" }}>Maggie :</Text>
            <Text style={{ fontWeight: "bold" }}>12Rs</Text>
          </View>
          <View style={{ paddingLeft: 45 }}>
            <TouchableOpacity
              onPress={() => {
                setMaggie(maggie + 1);
              }}
              style={{ backgroundColor: "purple", borderRadius: 10 }}
            >
              <AntDesign name="plus" size={34} color="white" />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => {
                if (maggie > 0) setMaggie(maggie - 1);
              }}
              style={{ backgroundColor: "purple", borderRadius: 10 }}
            >
              <AntDesign name="minus" size={34} color="white" />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => {
                setMaggie(0);
              }}
              style={{
                backgroundColor: "black",
                borderRadius: 10,
                width: 60,
                height: 24,
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  color: "white",
                  textAlign: "center",
                  fontSize: 16,
                }}
              >
                Reset
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={{ fontWeight: "bold", fontSize: 30, marginTop: -8 }}>
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
            width: 400,
            marginTop: 20,
          }}
        >
          <View>
            <Text style={{ fontWeight: "bold" }}>Silk Chocolate :</Text>
            <Text style={{ fontWeight: "bold" }}>40Rs</Text>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => {
                setChocolate(chocolate + 1);
              }}
              style={{ backgroundColor: "purple", borderRadius: 10 }}
            >
              <AntDesign name="plus" size={34} color="white" />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => {
                if (chocolate > 0) setChocolate(chocolate - 1);
              }}
              style={{ backgroundColor: "purple", borderRadius: 10 }}
            >
              <AntDesign name="minus" size={34} color="white" />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => {
                setChocolate(0);
              }}
              style={{
                backgroundColor: "black",
                borderRadius: 10,
                width: 60,
                height: 24,
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  color: "white",
                  textAlign: "center",
                  fontSize: 16,
                }}
              >
                Reset
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={{ fontWeight: "bold", fontSize: 30, marginTop: -8 }}>
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
            width: 400,
            marginTop: 20,
          }}
        >
          <View>
            <Text style={{ fontWeight: "bold" }}>Frooti :</Text>
            <Text style={{ fontWeight: "bold" }}>10Rs</Text>
          </View>
          <View style={{ paddingLeft: 55 }}>
            <TouchableOpacity
              onPress={() => {
                setFrooti(frooti + 1);
              }}
              style={{ backgroundColor: "purple", borderRadius: 10 }}
            >
              <AntDesign name="plus" size={34} color="white" />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => {
                if (frooti > 0) setFrooti(frooti - 1);
              }}
              style={{ backgroundColor: "purple", borderRadius: 10 }}
            >
              <AntDesign name="minus" size={34} color="white" />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => {
                setFrooti(0);
              }}
              style={{
                backgroundColor: "black",
                borderRadius: 10,
                width: 60,
                height: 24,
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  color: "white",
                  textAlign: "center",
                  fontSize: 16,
                }}
              >
                Reset
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={{ fontWeight: "bold", fontSize: 30, marginTop: -8 }}>
              {frooti}
            </Text>
          </View>
        </View>
        {/* Frooti Ends */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              alignContent: "space-between",
              borderWidth: 1.5,
              borderRadius: 20,
              width: 120,
              marginTop: 20,
              marginBottom: 20,
              backgroundColor: "black",
              marginLeft: -10,
              marginRight: 20,
            }}
          >
            <TouchableOpacity onPress={() => setShow(true)}>
              <Text
                style={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: 20,
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
                borderWidth: 1.5,
                borderRadius: 20,
                width: 200,
                marginTop: 20,
                marginBottom: 20,
              }}
            >
              <Text
                style={{ color: "purple", fontWeight: "bold", fontSize: 20 }}
              >
                Total Cost :
              </Text>
              <Text
                style={{ color: "purple", fontWeight: "bold", fontSize: 22 }}
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
            borderWidth: 1.5,
            borderRadius: 20,
            width: 120,
            marginTop: 20,
            marginBottom: 20,
            backgroundColor: "black",
            marginLeft: -10,
            marginRight: 20,
          }}
        >
          <TouchableOpacity onPress={() => setShow(false)}>
            <Text
              style={{
                color: "white",
                fontWeight: "bold",
                fontSize: 20,
                textAlign: "center",
              }}
            >
              Hide Cost
            </Text>
          </TouchableOpacity>
        </View>
        {/* <Prop name="shubham" /> */}
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    elevation: 10,
    borderRadius: 20,
    marginBottom: 40,
  },
});
export default Car;
