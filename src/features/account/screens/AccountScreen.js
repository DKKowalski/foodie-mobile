import React from "react";
import BackgroundImg, { AuthBtn } from "../components/BackgroundImg";

function AccountScreen({ navigation }) {
  return (
    <BackgroundImg>
      <AuthBtn
        icon="lock-open-otline"
        mode="contained"
        color="blue"
        onPress={navigation.navigate("login")}
      >
        Login
      </AuthBtn>
      <AuthBtn
        icon="lock-open-otline"
        mode="contained"
        color="blue"
        onPress={navigation.navigate("register")}
      >
        Register
      </AuthBtn>
    </BackgroundImg>
  );
}

export default AccountScreen;
