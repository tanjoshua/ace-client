import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Browse from "../screens/listings/Browse";
import ListingDetails from "../screens/listings/ListingDetails";

// import navoptions
import { navOptions as listingDetailsOptions } from "../screens/listings/ListingDetails";

const ListingStack = createStackNavigator();

const ListingNavigator = () => {
  return (
    <ListingStack.Navigator screenOptions={{}}>
      <ListingStack.Screen
        name="Browse"
        component={Browse}
        options={{ headerShown: false }}
      />
      <ListingStack.Screen
        name="ListingDetails"
        component={ListingDetails}
        options={listingDetailsOptions}
      />
    </ListingStack.Navigator>
  );
};

export default ListingNavigator;
