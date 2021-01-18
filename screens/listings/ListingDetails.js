import React, { useEffect, useState } from "react";
import { StyleSheet, View, ScrollView, Pressable } from "react-native";
import {
  Divider,
  Title,
  Text,
  Subheading,
  Headline,
  Caption,
  Avatar,
  withTheme,
} from "react-native-paper";
import axios from "axios";
import { useSelector } from "react-redux";

import urls from "../../constants/urls";
import Loading from "../../screens/shared/Loading";
import { Rating } from "react-native-ratings";

const ListingDetails = (props) => {
  const { listingId } = props.route.params;
  const token = useSelector((state) => state.auth.token);
  const [listingDetails, setListingDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadDetails = async () => {
      setIsLoading(true);
      const response = await axios.get(urls.server + `listings/${listingId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (response.status == 200) {
        setListingDetails(response.data);
      } else {
        throw new Error(response.data.message); // TODO: error catching
      }
      setIsLoading(false);
    };

    loadDetails();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <ScrollView style={styles.screen}>
      <Title>{listingDetails.title}</Title>
      <Subheading>{listingDetails.hourlyRate}/hr</Subheading>
      <Divider />
      <Pressable>
        <View style={styles.tutor}>
          <View style={styles.tutorProfile}>
            <Avatar.Image
              size={50}
              source={{ uri: listingDetails.tutor.profilePic.url }}
            />
            <View style={{ marginLeft: 10 }}>
              <Text>{listingDetails.tutor.name}</Text>
              <View style={styles.tutorProfile}>
                <Rating
                  type="custom"
                  readonly
                  imageSize={19}
                  ratingBackgroundColor="lightgray"
                  tintColor={props.theme.colors.background}
                  startingValue={
                    listingDetails.tutor.totalRating /
                    listingDetails.tutor.ratingCount
                  }
                />

                <Caption style={{ marginLeft: 5 }}>
                  ({listingDetails.tutor.ratingCount})
                </Caption>
              </View>
            </View>
          </View>
          <Caption>Private Tutor</Caption>
          <Text>More info about tutor to be added</Text>
        </View>
      </Pressable>

      <Divider />
      <Text>{listingDetails.description}</Text>
    </ScrollView>
  );
};

export default withTheme(ListingDetails);

const styles = StyleSheet.create({
  screen: { flex: 1, paddingHorizontal: 20 },
  tutor: { marginVertical: 5 },
  tutorProfile: { flexDirection: "row", alignItems: "center" },
});

// navOptions to be exported to navigation
export const navOptions = ({ route }) => ({
  title: "", // remove title
});
