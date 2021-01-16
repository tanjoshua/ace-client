import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  ActivityIndicator,
  Avatar,
  Caption,
  Card,
  Divider,
  Title,
} from "react-native-paper";
import { AirbnbRating } from "react-native-ratings";

const ListingSummary = (props) => {
  return (
    <View>
      <Card elevation={10}>
        {false ? (
          <View style={styles.loading}>
            <ActivityIndicator />
          </View>
        ) : (
          <>
            <Card.Title title="Title" />
            <Card.Content>
              <Text>Description</Text>
            </Card.Content>
            <Card.Actions style={styles.footer}>
              <View style={styles.owner}>
                <Avatar.Image size={20} />
                <Caption style={styles.ownerLabel}>Tutor</Caption>
              </View>
              <View style={styles.ratings}>
                <AirbnbRating isDisabled showRating={false} size={10} />
                <Caption style={{ marginLeft: 2 }}>(5)</Caption>
              </View>
            </Card.Actions>
          </>
        )}
      </Card>
    </View>
  );
};

export default ListingSummary;

const styles = StyleSheet.create({
  footer: {
    justifyContent: "space-between",
  },
  owner: {
    flexDirection: "row",
    alignItems: "center",
  },
  ownerLabel: {
    marginLeft: 5,
  },
  ratings: {
    flexDirection: "row",
    alignItems: "center",
  },
  loading: {
    padding: 10,
    height: 100,
    justifyContent: "center",
  },
});
