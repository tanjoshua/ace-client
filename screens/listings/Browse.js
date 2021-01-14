import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Divider, Searchbar } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

const browse = () => {
  [searchQuery, setSearchQuery] = useState("");

  return (
    <SafeAreaView style={styles.screen}>
      <Searchbar
        placeholder="Search"
        value={searchQuery}
        onChangeText={(query) => {
          setSearchQuery(query);
        }}
      />
      <View style={styles.categories}>
        <Text>browse</Text>
      </View>
      <Divider />
      <View style={styles.latest}>
        <Text>latest</Text>
      </View>
    </SafeAreaView>
  );
};

export default browse;

const styles = StyleSheet.create({
  screen: { flex: 1, alignItems: "center", padding: 20 },
  categories: { paddingVertical: 10 },
  latest: {},
});
