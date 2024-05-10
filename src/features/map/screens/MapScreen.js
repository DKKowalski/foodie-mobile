import { styled } from "styled-components";
import React from "react";
import { View, Platform } from "react-native";
import MapView from "react-native-maps";
import MapSearchBar from "../components/MapSearchBar";

const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`;

function MapScreen() {
  return (
    <View>
      <MapSearchBar />
      {Platform.OS === "android" && Platform.OS === "ios" && <Map />}
    </View>
  );
}

export default MapScreen;
