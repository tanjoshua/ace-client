import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Browse from "../screens/listings/Browse";

const MainTab = createBottomTabNavigator();

const MainNavigator = () => {
  return (
    <MainTab.Navigator>
      <MainTab.Screen name="Browse" component={Browse} />
    </MainTab.Navigator>
  );
};

export default MainNavigator;
