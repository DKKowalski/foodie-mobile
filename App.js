import { StyleSheet, Platform, SafeAreaView, StatusBar } from "react-native";

import { ThemeProvider } from "styled-components";

import { theme } from "./src/infrastructure/theme";

import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";

import { RestaurantsProvider } from "./src/services/restaurants/restaurants.context";
import { LocationProvider } from "./src/services/location/location.context";
import Navigation from "./src/infrastructure/navigation";
import { FavoritesContextProvider } from "./src/services/favorites/favorites.context";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import { AuthContextProvider } from "./src/services/authentication/authentication.context";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvfzLdjNOejT0fy1hYvZoALFGWlOEX6Zc",
  authDomain: "foodie-app-2cd33.firebaseapp.com",
  projectId: "foodie-app-2cd33",
  storageBucket: "foodie-app-2cd33.appspot.com",
  messagingSenderId: "996606568851",
  appId: "1:996606568851:web:5e10427cb287eef19c6066",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export default function APP() {
  const [isAuthenticated, setIsAuthenticate] = useState(false);
  const [latoLoaded] = useLato({ Lato_400Regular });
  const [oswaldLoaded] = useOswald({ Oswald_400Regular });

  useEffect(() => {
    setTimeout(() => {
      signInWithEmailAndPassword(auth, "kowalski@penguin.io", "penguin")
        .then((user) => {
          setIsAuthenticate(true);
          console.log(user);
        })
        .catch((e) => {
          console.log(e);
        });
    }, 2000);
  }, []);

  if (!latoLoaded || !oswaldLoaded) return null;

  if (!isAuthenticated) return null;

  return (
    <AuthContextProvider>
      <LocationProvider>
        <RestaurantsProvider>
          <FavoritesContextProvider>
            <ThemeProvider theme={theme}>
              <SafeAreaView style={styles.container}>
                <Navigation />
              </SafeAreaView>
            </ThemeProvider>
          </FavoritesContextProvider>
        </RestaurantsProvider>
      </LocationProvider>
    </AuthContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "column",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
