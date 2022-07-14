import React from "react";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Text } from "../../../components/typography/text";
import {
  Address,
  Icon,
  Info,
  OpenSvg,
  Rating,
  RestaurantCard,
  RestaurantCardCover,
  RowContainer,
} from "./restaurantInfoCardStyles";
import { Favourite } from "../../../components/favourites/favourite";

export const RestaurantInfo = ({ restaurant = {} as any }) => {
  const {
    name = "Some res",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://media.istockphoto.com/photos/table-top-view-of-spicy-food-picture-id1316145932?s=612x612",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
    placeId,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.ceil(rating)));

  return (
    <RestaurantCard elevation={5}>
      <Favourite restaurant={restaurant} />
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Text variant="label">{name}</Text>
        <RowContainer>
          <Rating>
            {ratingArray.map((_, i) => (
              <SvgXml
                xml={star}
                width={20}
                height={20}
                key={`star-${placeId}=${i}`}
              />
            ))}
          </Rating>
          {isClosedTemporarily && (
            <Text variant="error">CLOSED TEMPORARILY</Text>
          )}
          {isOpenNow && <OpenSvg xml={open} width={20} height={20} />}
          <Icon source={{ uri: icon }} />
        </RowContainer>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
