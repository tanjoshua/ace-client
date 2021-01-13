import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Headline, Title } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

const login = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <Headline>Welcome to Ace</Headline>
      <View></View>
    </SafeAreaView>
  );
};

export default login;

const styles = StyleSheet.create({
  screen: {
    padding: 20,
  },
});
