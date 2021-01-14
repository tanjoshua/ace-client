import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Avatar, Button } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/actions/authActions";

const Profile = () => {
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={styles.screen}>
      <Avatar.Image size={125} />
      <View style={styles.info}>
        <Text>Name</Text>
      </View>
      <View style={styles.actions}>
        <Button icon="account-edit">Edit details</Button>
        <Button
          icon="logout"
          onPress={() => {
            dispatch(logout());
          }}
        >
          Logout
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  screen: { flex: 1, alignItems: "center", padding: 20 },
  info: { paddingVertical: 20 },
  actions: { paddingVertical: 20 },
});
