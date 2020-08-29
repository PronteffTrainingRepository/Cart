import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ColorPropType,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
function Car() {
  const [kur, setKur] = useState(0);
  const [amul, setAmul] = useState(0);
  const [chips, setChips] = useState(0);
  const [colddrink, setColdDrink] = useState(0);
  const [show, setShow] = useState(false);
  const [cart, setCart] = useState(0);

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-end",
          marginTop: 20,
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
            left: 26,
            fontSize: 43,
            top: -12,
            color: "red",
          }}
        >
          {kur + amul + chips + colddrink}
        </Text>
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
              if (kur > 0) setKur(kur - 1);
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
            <Text style={{ color: "purple", fontWeight: "bold", fontSize: 20 }}>
              Total Cost :
            </Text>
            <Text style={{ color: "purple", fontWeight: "bold", fontSize: 22 }}>
              {kur * 10 + amul * 20 + chips * 15 + colddrink * 20}
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
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 80,
    elevation: 10,
    borderRadius: 20,
  },
});
export default Car;
