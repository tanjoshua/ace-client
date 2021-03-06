import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// import screens
import Browse from "../screens/listings/Browse";
import ListingDetails from "../screens/listings/ListingDetails";
import SearchResults from "../screens/listings/SearchResults";

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
      <ListingStack.Screen
        name="SearchResults"
        component={SearchResults}
        options={{ headerShown: false }}
      />
    </ListingStack.Navigator>
  );
};

export default ListingNavigator;
