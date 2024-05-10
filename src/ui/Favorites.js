import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useFavorites } from "../services/favorites/favorites.context";
import styled from "styled-components";

const FavBtn = styled(TouchableOpacity)`
  background-color: transparent;
  border-color: #20232a;
  position: absolute;
  top: 25px;
  right: 0px;
  width: 64px;
  z-index: 9;
`;

function Favorites({ restaurant }) {
  const { favorites, addFav, rmFav } = useFavorites();

  const isFav = favorites.find((r) => r.placeId === restaurant.placeId);
  // console.log(isFav);

  return (
    <FavBtn onPress={() => (!isFav ? addFav(restaurant) : rmFav(restaurant))}>
      <AntDesign
        name={isFav ? "heart" : "hearto"}
        size={24}
        color={isFav ? "red" : "white"}
      />
    </FavBtn>
  );
}

export default Favorites;
