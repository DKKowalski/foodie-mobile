import { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const FavoritesContext = createContext();

const FavoritesContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("@favorites");

      if (value !== null) {
        setFavorites(JSON.parse(value));
      }
    } catch (e) {
      // error reading value
      console.log("ReadingError:", e);
    }
  };

  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("@favorites", jsonValue);
    } catch (e) {
      // saving error
      console.log("SavingError:", e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    storeData(favorites);
  }, [favorites]);

  const addFav = (restaurant) => {
    setFavorites([...favorites, restaurant]);
  };

  const rmFav = (restaurant) => {
    const newFav = favorites.filter(
      (item) => item.placeId !== restaurant.placeId
    );
    setFavorites(newFav);
  };
  return (
    <FavoritesContext.Provider value={{ favorites, addFav, rmFav }}>
      {children}
    </FavoritesContext.Provider>
  );
};
const useFavorites = () => {
  const favorites = useContext(FavoritesContext);
  return favorites;
};

export { useFavorites, FavoritesContextProvider };
