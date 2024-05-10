import React, { useState } from "react";
import { Searchbar } from "react-native-paper";
import { useLocation } from "../services/location/location.context";
function SearchBar({ handleFavToggleIconPress, isFavToggled }) {
  const [searchTerm, setSearchTerm] = useState("");
  const { search } = useLocation;

  return (
    <>
      <Searchbar
        icon={isFavToggled ? "heart" : "heart-outline"}
        onIconPress={handleFavToggleIconPress}
        elevation={5}
        placeholder="search for a location..."
        className="bg-white"
        value={searchTerm}
        onSubmitEditing={() => {
          search(searchTerm);
        }}
        onChangeText={(val) => {
          if (!searchTerm) return;
          setSearchTerm(val);
        }}
      />
    </>
  );
}

export default SearchBar;
