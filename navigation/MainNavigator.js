import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const MainTab = createBottomTabNavigator();

const MainNavigator = () => {
  return <MainTab.Navigator></MainTab.Navigator>;
};

export default MainNavigator;
