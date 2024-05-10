import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import {
  StyleSheet,
  FlatList,
  View,
  Platform,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
} from "react-native";
import SearchBar from "../../../ui/SearchBar";
import RestaurantInfo from "../components/RestaurantInfo";
import { useRestaurants } from "../../../services/restaurants/restaurants.context";
import { ActivityIndicator } from "react-native-paper";
import { useState } from "react";

import { useFavorites } from "../../../services/favorites/favorites.context";
import FavoritesBar from "../../../ui/FavoritesBar";

export default function RestaurantsScreen({ navigation }) {

  
  const { restaurants, isLoading, error } = useRestaurants();
  const [isToggled, setIsToggled] = useState(false);
  const { favorites } = useFavorites();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <SearchBar
          isFavToggled={isToggled}
          handleFavToggleIconPress={() => setIsToggled(!isToggled)}
        />
      </View>

      {isToggled && <FavoritesBar favorites={favorites} onNavigate={navigation.navigate} />}

      <View style={styles.list}>
        {isLoading && <ActivityIndicator animating={true} />}
        {!isLoading && (
          <FlatList
            data={restaurants}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("Details", {
                      restaurant: item,
                    })
                  }
                >
                  {item ? (
                    <RestaurantInfo key={item.name} restaurant={item} />
                  ) : null}
                </TouchableOpacity>
              );
            }}
            keyExtractor={(item) => item.name}
            contentContainerStyle={{ padding: 8 }}
          />
        )}
      </View>
      <ExpoStatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "column",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },

  text: {
    color: "white",
  },
  search: {
    flex: 0.1,
    padding: 16,
  },
  list: {
    flex: 0.9,
    padding: 16,
  },
});
