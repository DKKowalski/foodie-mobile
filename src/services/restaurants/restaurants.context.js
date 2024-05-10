import { createContext, useContext, useEffect, useState } from "react";
import { restaurantRequest, transformRes } from "./restaurants.service";
import { useLocation } from "../location/location.context";

const RestaurantsContext = createContext();

const RestaurantsProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { location } = useLocation();

  const retrieveRestaurants = () => {
    setIsLoading(true);
    setRestaurants([]);
    setTimeout(() => {
      restaurantRequest()
        .then(transformRes)
        .then((res) => {
          setRestaurants(res);
          setIsLoading(false);
        })
        .catch((err) => {
          setError(err);
          setIsLoading(false);
        });
    }, 1000);
  };

  useEffect(() => retrieveRestaurants(location), [location]);

  return (
    <RestaurantsContext.Provider value={{ restaurants, isLoading, error }}>
      {children}
    </RestaurantsContext.Provider>
  );
};

const useRestaurants = () => {
  const restaurants = useContext(RestaurantsContext);
  if (!restaurants) throw new Error("Context used out of scope");
  return restaurants;
};

export { RestaurantsProvider, useRestaurants };
