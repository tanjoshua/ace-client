import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  ActivityIndicator,
  Avatar,
  Badge,
  Caption,
  Card,
  Chip,
  Divider,
  Subheading,
} from "react-native-paper";
import { AirbnbRating } from "react-native-ratings";

const ListingSummary = (props) => {
  return (
    <View>
      <Card elevation={1}>
        <Card.Title title={props.title} />
        <Card.Content>
          <Subheading>{props.hourlyRate}/hr</Subheading>
          <Divider />
          <Text style={styles.description} numberOfLines={3}>
            {props.description}
          </Text>
        </Card.Content>
        <Card.Actions style={styles.footer}>
          <View style={styles.tutorDetails}>
            <Avatar.Image
              size={20}
              source={{ uri: props.tutor.profilePic.url }}
            />
            <Caption style={styles.tutorLabel}>{props.tutor.name}</Caption>
          </View>
          <View style={styles.ratings}>
            <AirbnbRating
              isDisabled
              showRating={false}
              size={10}
              defaultRating={props.tutor.totalRating / props.tutor.ratingCount}
            />
            <Caption style={{ marginLeft: 2 }}>
              ({props.tutor.ratingCount})
            </Caption>
          </View>
        </Card.Actions>
      </Card>
    </View>
  );
};

export default ListingSummary;

const styles = StyleSheet.create({
  footer: {
    justifyContent: "space-between",
  },
  tutorDetails: {
    flexDirection: "row",
    alignItems: "center",
  },
  tutorLabel: {
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
