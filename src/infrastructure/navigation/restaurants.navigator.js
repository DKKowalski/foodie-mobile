import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import RestaurantsScreen from "../../features/restaurants/screens/RestaurantsScreen";
import RestaurantDetailScreen from "../../features/restaurants/screens/RestaurantDetailScreen";

const RestaurantStack = createStackNavigator();

function RestaurantsNavigator() {
  return (
    <RestaurantStack.Navigator
      screenOptions={() => {
        return {
          ...TransitionPresets.ModalPresentationIOS,
          headerShown: false,
        };
      }}
    >
      <RestaurantStack.Screen name="Home" component={RestaurantsScreen} />
      <RestaurantStack.Screen
        name="Details"
        component={RestaurantDetailScreen}
      />
    </RestaurantStack.Navigator>
  );
}

export default RestaurantsNavigator;
