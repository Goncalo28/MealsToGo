import React from "react";

import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import { SettingsScreen } from "../../features/settings/screens/settingsScreen";
import { FavouritesScreen } from "../../features/settings/screens/favouritesScreen";
import { CameraScreen } from "../../features/settings/screens/cameraScreen";

const Stack = createStackNavigator();

export const SettingsNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen
        options={{
          headerShown: true,
        }}
        name="Favourites"
        component={FavouritesScreen}
      />
      <Stack.Screen
        options={{
          headerShown: true,
        }}
        name="Camera"
        component={CameraScreen}
      />
    </Stack.Navigator>
  );
};
