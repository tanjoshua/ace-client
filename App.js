import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { Provider } from "react-redux";
import EntryNavigator from "./navigation/EntryNavigator";
import store from "./redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <PaperProvider>
        <NavigationContainer>
          <EntryNavigator />
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
}
