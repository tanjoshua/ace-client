import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Profile from "../screens/user/Profile";

const ListingStack = createStackNavigator();

const ListingNavigator = () => {
  return (
    <ListingStack.Navigator screenOptions={{ headerShown: false }}>
      <ListingStack.Screen name="Profile" component={Profile} />
    </ListingStack.Navigator>
  );
};

export default ListingNavigator;
