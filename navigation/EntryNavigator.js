import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import MainNavigator from "./MainNavigator";
import AuthNavigator from "./AuthNavigator";
import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { autoLogin } from "../redux/actions/authActions";
import Loading from "../screens/shared/Loading";

const EntryNavigator = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // check for stored user
  useEffect(() => {
    const tryLogin = async () => {
      setIsLoading(true);

      // check if user data is stored
      const userData = await AsyncStorage.getItem("@user");

      if (userData) {
        const userDataJSON = JSON.parse(userData);
        dispatch(autoLogin(userDataJSON));
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }

      setIsLoading(false);
    };

    tryLogin();
  }, []);

  // show loading screen if loading
  if (isLoading) {
    return <Loading />;
  }

  // return screens
  return <>{isAuthenticated ? <MainNavigator /> : <AuthNavigator />}</>;
};

export default EntryNavigator;
