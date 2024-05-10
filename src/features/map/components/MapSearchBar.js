import React, { useState } from "react";
import { Searchbar } from "react-native-paper";
import { useLocation } from "../../../services/location/location.context";

function MapSearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const { location } = useLocation;

  return (
    <>
      <Searchbar
      icon="map"
        style={{
          top: 30,
          marginHorizontal: 20,
          position: "absolute",
          zIndex: 999,
        }}
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

export default MapSearchBar;
