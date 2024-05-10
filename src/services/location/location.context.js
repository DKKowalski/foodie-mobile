import { createContext, useContext, useEffect, useState } from "react";
import { locationRequest, locationTransform } from "./location.service";

const LocationContext = createContext();

const LocationProvider = ({ children }) => {
  const [location, setLocation] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [keyword, setKeyword] = useState("");

  const onSearch = (searchKeyWord) => {
    setIsLoading(true);
    setKeyword(searchKeyWord);
    if (!searchKeyWord) return;
    locationRequest(searchKeyword.toLowerCase())
      .then(locationTransform)
      .then((result) => {
        setIsLoading(false);
        setLocation(result);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  };
  useEffect(() => {
    onSearch(keyword);
  }, [onSearch, keyword]);

  return (
    <LocationContext.Provider
      value={{ isLoading, error, location, search: onSearch, keyword }}
    >
      {children}
    </LocationContext.Provider>
  );
};

const useLocation = () => {
  const location = useContext(LocationContext);

  if (location === "undefined") throw new Error("location not found");

  return location;
};

export { LocationProvider, useLocation };
