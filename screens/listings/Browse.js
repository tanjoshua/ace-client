import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Divider, Searchbar, Surface, Title } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import ListingSummary from "../../components/listings/ListingSummary";

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
        <Surface style={styles.surface}>
          <Text>Primary</Text>
        </Surface>
        <Surface style={styles.surface}>
          <Text>Secondary</Text>
        </Surface>
        <Surface style={styles.surface}>
          <Text>JC</Text>
        </Surface>
        <Surface style={styles.surface}>
          <Text>Polytechnic</Text>
        </Surface>
        <Surface style={styles.surface}>
          <Text>Tertiary</Text>
        </Surface>
        <Surface style={styles.surface}>
          <Text>Others</Text>
        </Surface>
      </View>
      <Divider />
      <View style={styles.latest}>
        <Title>Latest Listings</Title>
        <Divider />
        <ListingSummary />
      </View>
    </SafeAreaView>
  );
};

export default browse;

const styles = StyleSheet.create({
  screen: { flex: 1, alignItems: "center", padding: 20 },
  categories: {
    flexDirection: "row",
    paddingVertical: 10,
    width: "100%",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  latest: {
    width: "100%",
  },
  surface: {
    padding: 8,
    height: 100,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    elevation: 8,
    marginVertical: 10,
  },
});
