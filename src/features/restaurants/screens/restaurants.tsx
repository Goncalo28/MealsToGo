import React, { useContext, useState } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import { ActivityIndicator, Colors } from "react-native-paper";
import { RestaurantInfo } from "../components/restaurantInfoCard";
import styled from "styled-components/native";
import { SafeArea } from "../../../components/utility/safeAre";
import { RestaurantsContext } from "../../../services/restaurants/restaurantsContext";
import { Search } from "../components/search";
import { FavouritesBar } from "../../../components/favourites/favouritesBar";
import { FavouritesContext } from "../../../services/favourites/favouritesContext";
import { RestaurantList } from "../components/restaurantListStyles";
import { FadeInView } from "../../../components/animations/fadeAnimation";

const LoadingIndicator = styled(ActivityIndicator)`
  position: absolute;
  bottom: 50%;
  align-self: center;
`;

export const RestaurantsScreen = ({ navigation }) => {
  const { restaurants, isLoading } = useContext(RestaurantsContext);
  const { favourites } = useContext(FavouritesContext);
  const [isToggled, setIsToggled] = useState(false);

  return (
    <SafeArea>
      <Search
        onFavouritesToggle={() => setIsToggled(!isToggled)}
        isFavouritesToggled={isToggled}
      />
      {isToggled && (
        <FavouritesBar
          favourites={favourites}
          onNavigate={navigation.navigate}
        />
      )}

      {isLoading && <LoadingIndicator size="large" color={Colors.teal200} />}
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RestaurantDetail", { restaurant: item })
              }
            >
              <FadeInView>
                <RestaurantInfo restaurant={item} />
              </FadeInView>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item: any) => item.name}
      />
    </SafeArea>
  );
};
