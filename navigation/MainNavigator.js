import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Browse from "../navigation/BrowseNavigator";
import User from "../navigation/UserNavigator";

const MainTab = createMaterialBottomTabNavigator();

const MainNavigator = () => {
  return (
    <MainTab.Navigator>
      <MainTab.Screen name="Browse" component={Browse} />
      <MainTab.Screen name="User" component={User} />
    </MainTab.Navigator>
  );
};

export default MainNavigator;
