import React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import styled from "styled-components";
import RestaurantInfo from "../components/RestaurantInfo";
import { List } from "react-native-paper";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
`;

function RestaurantDetailScreen({ route }) {
  const { restaurant } = route.params;
  return (
    <SafeArea>
      <RestaurantInfo restaurant={restaurant} />

      <ScrollView>
        <List.Accordion
          title="Breakfast"
          id="1"
          left={(props) => <List.Icon {...props} icon="bread-slice" />}
        >
          <List.Item title="Tea with Bread and Fried Egg" />
        </List.Accordion>
        <List.Accordion
          title="Lunch"
          id="2"
          left={(props) => <List.Icon {...props} icon="hamburger" />}
        >
          <List.Item title="Fried Rice and Baked Chicken" />
        </List.Accordion>
        <List.Accordion
          title="Dinner"
          id="3"
          left={(props) => <List.Icon {...props} icon="food-variant" />}
        >
          <List.Item title="Fufu with Goat Light Soup" />
        </List.Accordion>
        <List.Accordion
          title="Drinks"
          id="4"
          left={(props) => <List.Icon {...props} icon="cup" />}
        >
          <List.Item title="Pepsi" />
        </List.Accordion>
      </ScrollView>
    </SafeArea>
  );
}

export default RestaurantDetailScreen;
