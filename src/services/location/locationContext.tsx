import React, { createContext, useEffect, useState } from "react";
import { locationRequest, locationTransform } from "./locationService";

export const LocationContext: any = createContext({});

export const LocationContextProvider = ({ children }: any) => {
  const [keyword, setKeyword] = useState("San Francisco");
  const [location, setLocation] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const onSearch = async (searchKeyword: string) => {
    setIsLoading(true);
    setKeyword(searchKeyword);
  };

  useEffect(() => {
    if (!keyword.length) {
      return;
    }
    const run = async () => {
      try {
        const result: any = await locationRequest(keyword.toLowerCase());
        const transformedResult: any = locationTransform(result);
        setIsLoading(false);
        setLocation(transformedResult);
      } catch (err: any) {
        setIsLoading(false);
        setError(err);
      }
    };
    run();
  }, [keyword]);

  return (
    <LocationContext.Provider
      value={{
        location,
        isLoading,
        error,
        search: onSearch,
        keyword,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};
