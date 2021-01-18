import React, { useState, useEffect, useRef } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import {
  ActivityIndicator,
  Caption,
  Divider,
  Searchbar,
  Surface,
  Title,
} from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import axios from "axios";

import urls from "../../constants/urls";
import ListingSummary from "../../components/listings/ListingSummary";

const browse = (props) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [listings, setListings] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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

  const refresh = async () => {
    setIsRefreshing(true);
    await loadListings(1);
    setIsRefreshing(false);
  };

  // load latest listings when screen mounts
  useEffect(() => {
    const load = async () => {
      setIsLoading(true);
      await loadListings(1);
      setIsLoading(false);
    };

    load();
  }, []);

  // Header component for flatlist
  const BrowseHeader = () => {
    return (
      <View>
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
        {isLoading && <ActivityIndicator />}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.search}>
        <Searchbar
          placeholder="Search"
          value={searchQuery}
          onChangeText={(query) => {
            setSearchQuery(query);
          }}
          onSubmitEditing={() => {
            props.navigation.navigate("SearchResults", { searchQuery });
          }}
        />
      </View>
      <FlatList
        data={listings}
        ListHeaderComponent={BrowseHeader}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        ListFooterComponent={() => {
          if (isLoading) {
            return <View></View>;
          }

          return currentPage > totalPages ? (
            <View style={{ alignItems: "center" }}>
              <Caption>No more listings</Caption>
            </View>
          ) : (
            <ActivityIndicator style={{ paddingVertical: 5 }} />
          );
        }}
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

export default browse;

const styles = StyleSheet.create({
  screen: { flex: 1, alignItems: "center", padding: 20 },
  search: {
    marginBottom: 5,
    width: "100%",
  },
  categories: {
    flexDirection: "row",
    paddingVertical: 5,
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
