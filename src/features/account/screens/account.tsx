import { useNavigation } from "@react-navigation/native";
import React from "react";
import { ImageBackground, View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import LottieView from "lottie-react-native";

const watermelon = require("../../../../assets/watermelon.json");

export const AccountScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={{
          uri: "https://images.unsplash.com/photo-1623800330578-2cd67efaec75?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
        }}
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        resizeMode="cover"
      >
        <LottieView
          key="animation"
          autoPlay
          loop
          resizeMode="contain"
          source={watermelon}
          style={{ top: -100 }}
        />
        <View style={{ justifyContent: "center", width: "50%" }}>
          <TouchableOpacity
            style={{ marginBottom: 24, borderRadius: 10, overflow: "hidden" }}
            onPress={() => navigation.navigate("Login")}
          >
            <Text
              style={{
                backgroundColor: "orange",
                padding: 20,
                textAlign: "center",
                color: "white",
              }}
            >
              Login
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ borderRadius: 10, overflow: "hidden" }}
            onPress={() => navigation.navigate("Register")}
          >
            <Text
              style={{
                backgroundColor: "white",
                padding: 20,
                textAlign: "center",
                color: "orange",
              }}
            >
              Register
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};
