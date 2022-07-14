import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { useContext } from "react";
import { ImageBackground, TouchableOpacity, View, Text } from "react-native";
import { TextInput } from "react-native-paper";
import { AuthContext } from "../../../services/authentication/authContext";

export const RegisterScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPasswordPassword] = useState("");
  const { onRegister } = useContext<any>(AuthContext);

  return (
    <ImageBackground
      source={{
        uri: "https://images.unsplash.com/photo-1623800330578-2cd67efaec75?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
      }}
      style={{ flex: 1, justifyContent: "center" }}
      resizeMode="cover"
    >
      <View
        style={{
          backgroundColor: "white",
          width: "80%",
          alignSelf: "center",
          padding: 18,
          justifyContent: "center",
          borderRadius: 10,
        }}
      >
        <TextInput
          label="Email"
          mode="outlined"
          textContentType="emailAddress"
          keyboardType="email-address"
          value={email}
          activeOutlineColor="orange"
          autoCapitalize="none"
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          label="Password"
          mode="outlined"
          secureTextEntry
          textContentType="password"
          autoCapitalize="none"
          activeOutlineColor="orange"
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={{ marginTop: 12 }}
        />
        <TextInput
          label="Confirm password"
          mode="outlined"
          secureTextEntry
          textContentType="password"
          autoCapitalize="none"
          activeOutlineColor="orange"
          value={repeatedPassword}
          onChangeText={(text) => setRepeatedPasswordPassword(text)}
          style={{ marginTop: 12 }}
        />

        <TouchableOpacity
          style={{ marginTop: 18, borderRadius: 10, overflow: "hidden" }}
          onPress={() => onRegister(email, password, repeatedPassword)}
        >
          <Text
            style={{
              backgroundColor: "orange",
              padding: 18,
              textAlign: "center",
              color: "white",
            }}
          >
            Register
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};
