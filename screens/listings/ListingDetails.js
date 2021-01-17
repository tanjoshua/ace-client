import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Title } from "react-native-paper";

const ListingDetails = (props) => {
  const listingId = props.listingId;
  console.log(listingId);

  return (
    <View style={styles.screen}>
      <Title>Listing</Title>
    </View>
  );
};

export default ListingDetails;

const styles = StyleSheet.create({
  screen: { flex: 1, paddingHorizontal: 20 },
});

// navOptions to be exported to navigation
export const navOptions = ({ route }) => ({
  title: "", // remove title
});
