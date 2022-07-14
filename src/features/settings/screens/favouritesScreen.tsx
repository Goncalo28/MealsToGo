import { useNavigation } from "@react-navigation/native";
import React, { useContext } from "react";
import { TouchableOpacity } from "react-native";
import { Text } from "../../../components/typography/text";
import { SafeArea } from "../../../components/utility/safeAre";
import { FavouritesContext } from "../../../services/favourites/favouritesContext";
import { RestaurantList } from "../../restaurants/components/restaurantListStyles";
import { RestaurantInfo } from "../../restaurants/components/restaurantInfoCard";

export const FavouritesScreen = () => {
  const navigation = useNavigation();
  const { favourites } = useContext(FavouritesContext);

  return favourites.length ? (
    <SafeArea>
      <RestaurantList
        data={favourites}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RestaurantDetail", { restaurant: item })
              }
            >
              <RestaurantInfo restaurant={item} />
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  ) : (
    <SafeArea style={{ alignItems: "center", justifyContent: "center" }}>
      <Text center>No favourites yet</Text>
    </SafeArea>
  );
};
