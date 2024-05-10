import React from "react";
import { Card } from "react-native-paper";
import { ScrollView, View, TouchableOpacity } from "react-native";
import CompactRestaurantInfo from "../features/restaurants/components/CompactRestaurantInfo";
import styled from "styled-components/native";

const FavoritesWrapper = styled(Card)`
  padding: 10px;
  z-index: 999;
  border-radius: 15px;
`;

function FavoritesBar({ favorites, onNavigate }) {
  if (!favorites.length) {
    return null;
  }
  return (
    <FavoritesWrapper>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favorites.map((restaurant) => {
          const key = restaurant.name;
          return (
            <View style={{marginHorizontal:10}} key={key}>
              <TouchableOpacity
                onPress={() =>
                  onNavigate("Details", {
                    restaurant,
                  })
                }
              >
                <CompactRestaurantInfo restaurant={restaurant} />
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
    </FavoritesWrapper>
  );
}

export default FavoritesBar;
