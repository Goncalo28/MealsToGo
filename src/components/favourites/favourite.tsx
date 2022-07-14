import React, { useContext } from "react";
import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";
import { FavouritesContext } from "../../services/favourites/favouritesContext";
import { TouchableOpacity } from "react-native";

const FavouritteButton = styled(TouchableOpacity)`
  position: absolute;
  top: 30px;
  right: 30px;
  z-index: 9;
`;

export const Favourite = ({ restaurant }) => {
  const { favourites, addToFavourites, removeFromFavourites } =
    useContext(FavouritesContext);

  const isFavourite = favourites.find((r) => r.placeId === restaurant.placeId);

  return (
    <FavouritteButton
      onPress={() =>
        !isFavourite
          ? addToFavourites(restaurant)
          : removeFromFavourites(restaurant)
      }
    >
      <AntDesign
        name={isFavourite ? "heart" : "hearto"}
        size={25}
        color={isFavourite ? "red" : "white"}
      />
    </FavouritteButton>
  );
};
