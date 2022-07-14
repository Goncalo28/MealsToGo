import React, { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useContext } from "react";
import { AuthContext } from "../authentication/authContext";

export const FavouritesContext = createContext({});

export const FavouritesContextProvider = ({ children }: any) => {
  const { user } = useContext<any>(AuthContext);
  const [favourites, setFavourites] = useState<any[]>([]);

  const saveFavourites = async (value: any, uid: number) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(`@favourites-${uid}`, jsonValue);
    } catch (error) {}
  };

  const loadFavourites = async (uid: number) => {
    try {
      const value = await AsyncStorage.getItem(`@favourites-${uid}`);
      if (value !== null) {
        setFavourites(JSON.parse(value));
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  const add = (restaurant: any) => {
    setFavourites([...favourites, restaurant]);
  };

  const remove = (restaurant: any) => {
    const newFavourites = favourites.filter(
      (x: any) => x.placeId !== restaurant.placeId
    );

    console.log("removed", newFavourites);

    setFavourites(newFavourites);
  };

  useEffect(() => {
    if (user && user.uid) {
      loadFavourites(user.uid);
    }
  }, [user]);

  useEffect(() => {
    if (user && user.uid && favourites.length) {
      saveFavourites(favourites, user.uid);
    }
  }, [favourites, user]);

  return (
    <FavouritesContext.Provider
      value={{
        favourites: favourites,
        addToFavourites: add,
        removeFromFavourites: remove,
      }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};
