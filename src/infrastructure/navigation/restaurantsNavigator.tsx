import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { RestaurantsScreen } from "../../features/restaurants/screens/restaurants";
import { RestaurantDetailScreen } from "../../features/restaurants/screens/restaurantDetail";

const Stack = createStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="RestaurantsScreen" component={RestaurantsScreen} />
      <Stack.Screen
        options={{ presentation: "modal" }}
        name="RestaurantDetail"
        component={RestaurantDetailScreen}
      />
    </Stack.Navigator>
  );
};
