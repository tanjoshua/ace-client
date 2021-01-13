import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Headline, TextInput, Title } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

const login = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <Headline>Welcome to Ace</Headline>
      <View style={styles.login}>
        <TextInput label="Email" mode="outlined" />
        <TextInput label="Password" mode="outlined" secureTextEntry={true} />
        <Button style={styles.forgotPassword}>Forgot Password?</Button>
      </View>
      <View style={styles.buttons}>
        <Button mode="contained">Login</Button>
        <Button>Create Account</Button>
      </View>
    </SafeAreaView>
  );
};

export default login;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 20,
    justifyContent: "space-between",
  },
  login: {
    paddingVertical: 10,
  },
  forgotPassword: {
    alignSelf: "flex-end",
  },
});
