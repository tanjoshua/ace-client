import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainNavigator from "./MainNavigator";
import AuthNavigator from "./AuthNavigator";

const EntryNavigator = () => {
  // check for authentication
  const userIsAuthenticated;

  // return screens
  return (
    <NavigationContainer>
      {userIsAuthenticated ? <MainNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default EntryNavigator;
