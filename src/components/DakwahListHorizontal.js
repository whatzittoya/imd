//import react native
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
//import usestate and useeffect
import { useState, useEffect } from "react";
import EmptyDisplay from "./EmptyDisplay";
import styles from "../style/global";
import { Feather } from "@expo/vector-icons";
const DakwahList = ({ results }) => {
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
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                console.log(item.title);
              }}
            >
              <View style={[styles.content, stylesLocal.content]}>
                <Image style={stylesLocal.image} source={{ uri: item.image }} />
                <View style={stylesLocal.textContainer}>
                  <View style={stylesLocal.titleContainer}>
                    <Text style={stylesLocal.title}>{item.title}</Text>
                  </View>

                  <Text style={stylesLocal.secondary}>{item.thematic}</Text>
                  <Text style={stylesLocal.secondary}>{item.sylabus}</Text>
                  <Text style={stylesLocal.secondary}>{item.masjid}</Text>
                  <Text style={stylesLocal.date}>
                    <Feather
                      name="calendar"
                      size={15}
                      color="#828282"
                      style={{ marginLeft: 1 }}
                    />
                    {item.date}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
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
