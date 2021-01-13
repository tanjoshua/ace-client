import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Headline, TextInput, Title } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

const signup = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <Headline>Create your account</Headline>
      <View style={styles.signup}>
        <TextInput label="Email" mode="outlined" />
        <TextInput label="Password" mode="outlined" secureTextEntry={true} />
        <TextInput
          label="Confirm Password"
          mode="outlined"
          secureTextEntry={true}
        />
      </View>
      <View style={styles.buttons}>
        <Button mode="contained">Signup</Button>
      </View>
    </SafeAreaView>
  );
};

export default signup;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 20,
    justifyContent: "space-between",
  },
  signup: {
    paddingVertical: 10,
  },
});
