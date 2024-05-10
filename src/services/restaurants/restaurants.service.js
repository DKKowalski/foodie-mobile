import { mocks } from "./mock";
import { mockImages } from "./mock";
// import lodging from "../../../assets/lodging";
// import restaurantIcon from "../../../assets/restaurant-icon";
import camelize from "camelize";

export const transformRes = ({ results = [] }) => {
  //   const newResults = camelize(results.length);
  const mappedResults = results.map((item) => {
    item.photos = item.photos.map((p) => {
      return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
    });

    // item.icon = results.map((item) => {
    //   if (item.icon === "lodging") return lodging;
    //   if (item.icon === "restaurant-icon") return restaurantIcon;
    // });

    return {
      ...item,
      isOpenNow: item.opening_hours && item.opening_hours.open_now,
      isClosedTemporarily: item.business_status === "CLOSED_TEMPORARILY",
    };
  });
  return camelize(mappedResults);
};

export const restaurantRequest = (location = "51.219448,4.402464") => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) reject("not found");
    resolve(mock);
  });
};
