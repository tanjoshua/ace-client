import React, { useReducer } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Headline, TextInput, Title } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import TextInputWrapper from "../../components/shared/TextInputWrapper";

// initial state reducer for login form
const loginInitialState = { inputValues: { email: "", password: "" } };
const loginReducer = (state, action) => {
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

const login = (props) => {
  // set up reducer
  const [loginState, dispatchLoginForm] = useReducer(
    loginReducer,
    loginInitialState
  );

  // handler for any change in form inputs
  const inputChangeHandler = (input, value) => {
    dispatchLoginForm({ type: "UPDATE", input, value });
  };

  return (
    <SafeAreaView style={styles.screen}>
      <Headline>Welcome to Ace</Headline>
      <View style={styles.login}>
        <TextInputWrapper
          id="email"
          label="Email"
          mode="outlined"
          onInputChange={inputChangeHandler}
        />
        <TextInputWrapper
          id="password"
          label="Password"
          mode="outlined"
          secureTextEntry={true}
          value={loginState.inputValues.password}
          onInputChange={inputChangeHandler}
        />
        <Button style={styles.forgotPassword}>Forgot Password?</Button>
      </View>
      <View style={styles.buttons}>
        <Button mode="contained">Login</Button>
        <Button
          onPress={() => {
            props.navigation.navigate("Signup");
          }}
        >
          Create Account
        </Button>
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
