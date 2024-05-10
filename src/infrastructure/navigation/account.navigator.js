import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AccountScreen from "../../features/account/screens/AccountScreen";
import LoginScreen from "../../features/account/screens/LoginScreen";
import RegisterScreen from "../../features/account/screens/RegisterScreen";

const AccountStack = createStackNavigator();

function AccountNavigator() {
  return (
    <AccountStack.Navigator
      screenOptions={() => {
        return {
          headerShown: false,
        };
      }}
    >
      <AccountStack.Screen name="main" component={AccountScreen} />
      <AccountStack.Screen name="login" component={LoginScreen} />
      <AccountStack.Screen name="register" component={RegisterScreen} />
    </AccountStack.Navigator>
  );
}

export default AccountNavigator;
