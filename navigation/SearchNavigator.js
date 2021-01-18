import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// import screens
import ListingDetails from "../screens/listings/ListingDetails";
import SearchResults from "../screens/listings/SearchResults";

// import navoptions
import { navOptions as listingDetailsOptions } from "../screens/listings/ListingDetails";

const SearchStack = createStackNavigator();

const SearchNavigator = () => {
  return (
    <SearchStack.Navigator screenOptions={{}}>
      <SearchStack.Screen
        name="SearchResults"
        component={SearchResults}
        options={{ headerShown: false }}
      />
      <SearchStack.Screen
        name="ListingDetails"
        component={ListingDetails}
        options={listingDetailsOptions}
      />
    </SearchStack.Navigator>
  );
};

export default SearchNavigator;
