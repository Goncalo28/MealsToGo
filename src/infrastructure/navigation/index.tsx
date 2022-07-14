import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../services/authentication/authContext";
import { AccountNavigator } from "./accountNavigator";
import { AppNavigator } from "./appNavigator";

export const Navigation = () => {
  const { isAuthenticated } = useContext<any>(AuthContext);

  return (
    <NavigationContainer>
      {isAuthenticated ? <AppNavigator /> : <AccountNavigator />}
    </NavigationContainer>
  );
};
