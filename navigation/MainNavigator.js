import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Browse from "../navigation/BrowseNavigator";
import User from "../navigation/UserNavigator";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const MainTab = createMaterialBottomTabNavigator();

const MainNavigator = () => {
  return (
    <MainTab.Navigator shifting>
      <MainTab.Screen
        name="Browse"
        component={Browse}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="magnify" color={color} size={26} />
          ),
        }}
      />
      <MainTab.Screen
        name="User"
        component={User}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </MainTab.Navigator>
  );
};

export default MainNavigator;
