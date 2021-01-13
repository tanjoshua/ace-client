import React, { useReducer } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Headline, TextInput, Title } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import TextInputWrapper from "../../components/shared/TextInputWrapper";

// initial state reducer for login form
const signupInitialState = {
  inputValues: { email: "", password: "", confirmPassword: "" },
};
const signupReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE":
      const updatedValues = {
        ...state.inputValues,
        [action.input]: action.value,
      };

      return { ...state, inputValues: updatedValues };
    default:
      return state;
  }
};

const signup = () => {
  // set up reducer
  const [signupState, dispatchSignupForm] = useReducer(
    signupReducer,
    signupInitialState
  );

  // handler for any change in form inputs
  const inputChangeHandler = (input, value) => {
    dispatchSignupForm({ type: "UPDATE", input, value });
  };

  console.log(signupState);
  return (
    <SafeAreaView style={styles.screen}>
      <Headline>Create your account</Headline>
      <View style={styles.signup}>
        <TextInputWrapper
          id="email"
          label="Email"
          mode="outlined"
          autoCapitalize="none"
          onInputChange={inputChangeHandler}
        />
        <TextInputWrapper
          id="password"
          label="Password"
          mode="outlined"
          autoCapitalize="none"
          secureTextEntry={true}
          onInputChange={inputChangeHandler}
        />
        <TextInputWrapper
          id="confirmPassword"
          label="Confirm Password"
          mode="outlined"
          autoCapitalize="none"
          secureTextEntry={true}
          onInputChange={inputChangeHandler}
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
