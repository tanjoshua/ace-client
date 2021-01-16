import React, { useState, useEffect } from "react";
import { FlatList, RefreshControl, StyleSheet, Text, View } from "react-native";
import { Divider, Searchbar, Surface, Title } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import axios from "axios";

import urls from "../../constants/urls";
import ListingSummary from "../../components/listings/ListingSummary";

const browse = () => {
  [searchQuery, setSearchQuery] = useState("");
  [listings, setListings] = useState([]);
  [currentPage, setCurrentPage] = useState(1);
  [totalPages, setTotalPages] = useState(1);
  [isLoading, setIsLoading] = useState(true);

  // get user token
  const token = useSelector((state) => state.auth.token);

  // load listings function
  const loadListings = async (page = currentPage) => {
    if (page > totalPages) {
      return;
    }

    setIsLoading(true);
    const response = await axios.get(urls.server + "listings", {
      headers: { Authorization: `Bearer ${token}` },
      params: { page },
    });

    if (response.status == 200) {
      if (page == 1) {
        setListings(response.data.listings);
      } else {
        setListings(listings.concat(response.data.listings));
      }
      setCurrentPage(page + 1);
      setTotalPages(response.data.totalPages);
    } else {
      // TODO: error catching
    }
    setIsLoading(false);
  };

  // load latest listings when screen mounts
  useEffect(() => {
    loadListings();
  }, []);

  // Header component for flatlist
  const BrowseHeader = () => {
    return (
      <View>
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
        <View style={styles.latest}>
          <Title>Latest Listings</Title>
          <Divider />
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.screen}>
      <FlatList
        data={listings}
        ListHeaderComponent={BrowseHeader}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        renderItem={({ item, index }) => {
          return (
            <ListingSummary
              id={item._id.toString()}
              title={item.title}
              description={item.description}
              hourlyRate={item.hourlyRate}
              tutor={item.tutor}
            />
          );
        }}
        refreshing={isLoading}
        onRefresh={loadListings.bind(this, 1)}
      />
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
    marginBottom: 10,
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
