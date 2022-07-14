import camelize from "camelize-ts";
import { locations } from "./locationMock";

export const locationRequest = (searchTerm: any) => {
  return new Promise((resolve, reject) => {
    const locationMock = locations[searchTerm];
    if (!locationMock) {
      reject("not found");
    }
    resolve(locationMock);
  });
};

export const locationTransform = (result: any) => {
  const formattedResponse = camelize<{ results: any[] }>(result);
  const { geometry = {} } = formattedResponse.results[0];
  const { lat, lng } = geometry.location;

  return { lat, lng, viewport: geometry.viewport };
};
