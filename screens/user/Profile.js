import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Avatar } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

const Profile = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <Avatar.Image size={125} />
      <View style={styles.info}>
        <Text>Name</Text>
      </View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  screen: { flex: 1, alignItems: "center", padding: 20 },
  info: { paddingVertical: 20 },
});
