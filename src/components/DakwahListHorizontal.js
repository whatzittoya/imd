//import react native
import { View, StyleSheet, FlatList } from "react-native";

import EmptyDisplay from "./EmptyDisplay";

import styles from "../style/global";

import EventCard from "./Content/EventCard";

import HorizontalSeparator from "./Content/HorizontalSeparator";

const DakwahList = ({ results, ItemComponent = Event }) => {
  const refresh = () => {
    console.log("refresh");
  };

  if (!results) {
    return <EmptyDisplay refresh={refresh}></EmptyDisplay>;
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={results}
        horizontal
        keyExtractor={(result) => result.id.toString()}
        ItemSeparatorComponent={HorizontalSeparator}
        renderItem={({ item }) => {
          return (
            <ItemComponent
              item={item}
              onPress={() => console.log(item.title)}
              thumbnailUrl={item.image}
              imageUrl={item.image}
            />
          );
        }}
      ></FlatList>
    </View>
  );
};

const colorStatus = [
  {
    backgroundColor: "#F1D00A",
  },
  {
    backgroundColor: "#8BDB81",
  },
  {
    backgroundColor: "#B33030",
  },
];
const stylesLocal = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#F6F6F6",
  },
  content: {
    flexDirection: "row",
    width: 250,
    height: 150,
    backgroundColor: "#F2F2F2",
    paddingLeft: 5,
    paddingRight: 10,
    paddingTop: 15,
    paddingBottom: 15,
    margin: 5,
    borderRadius: 5,
  },
  titleContainer: {
    flexDirection: "row",
  },
  title: {
    fontSize: 14,
    marginVertical: 2,
    flex: 2,
  },
  secondary: {
    fontSize: 11,
    color: "#828282",
    margin: 0,
    padding: 0,
    flex: 1,
  },
  status: {
    fontSize: 11,
    marginVertical: 2,
    flex: 1,
    textAlign: "right",
    color: "#fff",
    borderRadius: 5,
    textAlignVertical: "center",
    textAlign: "center",
  },

  //   rounded image style
  image: {
    marginHorizontal: 5,
    width: 60,
    height: 60,
    borderRadius: 50,
    marginBottom: 5,
    alignSelf: "center",
    marginRight: 20,

    marginBottom: 10,
    marginTop: 10,
    paddingRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  date: {
    marginVertical: 2,
    textAlign: "right",
    fontSize: 11,
    color: "#828282",
  },
  description: {
    fontSize: 11,
    marginVertical: 2,
  },
});

export default DakwahList;
