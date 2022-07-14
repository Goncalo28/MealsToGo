import React from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";
import { CompactRestaurantInfo } from "../restaurant/compactRestaurantInfo";
import { Text } from "../typography/text";

const FavouriesWrapper = styled.View`
  padding: 10px;
`;

export const FavouritesBar = ({ favourites, onNavigate }) => {
  if (!favourites.length) {
    return null;
  }
  return (
    <FavouriesWrapper>
      <Text style={{ marginLeft: 8 }}>Favourites</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favourites.map((restaurant) => {
          return (
            <View key={restaurant.name}>
              <TouchableOpacity
                onPress={() =>
                  onNavigate("RestaurantDetail", { restaurant: restaurant })
                }
              >
                <CompactRestaurantInfo restaurant={restaurant} />
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
    </FavouriesWrapper>
  );
};
