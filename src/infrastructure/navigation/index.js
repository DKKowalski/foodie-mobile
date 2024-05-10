import React from "react";
import AppNavigation from "./app.navigation";
import { useAuth } from "../../services/authentication/authentication.context";
import { NavigationContainer } from "@react-navigation/native";
import AccountNavigator from "./account.navigator";

function Navigation() {
  const { isAuthenticated } = useAuth();

  return (
    <NavigationContainer>
      {isAuthenticated ? <AppNavigation /> : <AccountNavigator />}
    </NavigationContainer>
  );
}

export default Navigation;
