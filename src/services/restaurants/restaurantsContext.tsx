import React, { useState, createContext, useEffect, useContext } from "react";
import { LocationContext } from "../location/locationContext";
import {
  restaurantRequest,
  restaurantsTransform,
} from "../restaurants/restaurantsService";

export const RestaurantsContext: any = createContext({});

export const RestaurantsContextProvider = ({ children }: any) => {
  const [restaurants, setRestaurants] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { location } = useContext(LocationContext);

  const retrieveRestaurants = (locationToSearch: any) => {
    setIsLoading(true);
    setRestaurants([]);
    setTimeout(async () => {
      try {
        const result: any = await restaurantRequest(locationToSearch);
        const transformedResult = restaurantsTransform(result);
        setIsLoading(false);
        setRestaurants(transformedResult as any);
      } catch (err: any) {
        setIsLoading(false);
        setError(err);
      }
    }, 2000);
  };

  useEffect(() => {
    if (location) {
      const locationString: any = `${location.lat},${location.lng}`;
      retrieveRestaurants(locationString);
    }
  }, [location]);

  return (
    <RestaurantsContext.Provider value={{ restaurants, isLoading, error }}>
      {children}
    </RestaurantsContext.Provider>
  );
};
