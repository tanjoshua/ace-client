import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Browse from "../screens/listings/Browse";

const ListingStack = createStackNavigator();

const ListingNavigator = () => {
  return (
    <ListingStack.Navigator>
      <ListingStack.Screen name="Browse" component={Browse} />
    </ListingStack.Navigator>
  );
};

export default ListingNavigator;
