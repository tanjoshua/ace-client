import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { useSelector } from "react-redux";
import { Searchbar, ActivityIndicator, Caption } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";

import urls from "../../constants/urls";

import ListingSummary from "../../components/listings/ListingSummary";

const SearchResults = () => {
  [searchQuery, setSearchQuery] = useState("");
  [listings, setListings] = useState([]);
  [currentPage, setCurrentPage] = useState(1);
  [totalPages, setTotalPages] = useState(1);
  [isRefreshing, setIsRefreshing] = useState(false);

  // get user token
  const token = useSelector((state) => state.auth.token);

  // load listings function
  const loadListings = async (page) => {
    if (page > totalPages) {
      return;
    }

    const response = await axios.get(urls.server + "listings", {
      headers: { Authorization: `Bearer ${token}` },
      params: { page: page },
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
  };

  const refresh = () => {
    setIsRefreshing(true);
    loadListings(1);
    setIsRefreshing(false);
  };

  // load latest listings when screen mounts
  useEffect(() => {
    loadListings(1);
  }, []);

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.search}>
        <Searchbar
          placeholder="Search"
          value={searchQuery}
          onChangeText={(query) => {
            setSearchQuery(query);
          }}
        />
      </View>
      <FlatList
        data={listings}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        ListFooterComponent={() =>
          currentPage > totalPages ? (
            <View style={{ alignItems: "center" }}>
              <Caption>No more listings</Caption>
            </View>
          ) : (
            <ActivityIndicator style={{ paddingVertical: 5 }} />
          )
        }
        keyExtractor={(item, index) => item._id.toString()}
        renderItem={({ item, index }) => {
          return (
            <ListingSummary
              id={item._id}
              title={item.title}
              description={item.description}
              hourlyRate={item.hourlyRate}
              tutor={item.tutor}
              onPress={() => {
                props.navigation.navigate("ListingDetails", {
                  listingId: item._id,
                });
              }}
            />
          );
        }}
        refreshing={isRefreshing}
        onRefresh={refresh}
        onEndReachedThreshold={0.5}
        onEndReached={loadListings.bind(this, currentPage)}
      />
    </SafeAreaView>
  );
};

export default SearchResults;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 20,
  },
  search: {
    marginBottom: 5,
    width: "100%",
  },
});
