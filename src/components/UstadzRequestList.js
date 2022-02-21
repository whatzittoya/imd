//import react native
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
//import usestate and useeffect
import { useState, useEffect } from "react";
import { Button } from "react-native-paper";
import EmptyDisplay from "./EmptyDisplay";
import styles from "../style/global";
import { Feather } from "@expo/vector-icons";

const UstadzRequestList = ({ results }) => {
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
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                console.log(item.title);
              }}
            >
              <View style={[styles.content, { paddingBottom: 10 }]}>
                <Image style={stylesLocal.image} source={{ uri: item.image }} />
                <View style={stylesLocal.textContainer}>
                  <View style={stylesLocal.titleContainer}>
                    <Text style={stylesLocal.title}>{item.name}</Text>
                  </View>
                  <Text style={stylesLocal.secondary}>{item.speciality}</Text>
                  <Text style={stylesLocal.secondary}>{item.education}</Text>
                  <View style={stylesLocal.titleContainer}>
                    <Text style={stylesLocal.date}>
                      <Feather
                        name="calendar"
                        size={15}
                        color="#828282"
                        style={{ marginLeft: 1 }}
                      />
                      {item.date}
                    </Text>
                    <Button
                      mode="contained"
                      labelStyle={{ fontSize: 15 }}
                      icon="check"
                      style={stylesLocal.button}
                      color="#27AE60"
                      compact={true}
                      contentStyle={{ padding: 0, height: 30 }}
                    >
                      <Text style={{ fontSize: 10, padding: 0 }}>Terima</Text>
                    </Button>
                  </View>
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
    backgroundColor: "#828282",
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
    backgroundColor: "#F6F6F6",
    flexDirection: "row",
  },
  titleContainer: {
    flexDirection: "row",
  },
  title: {
    fontSize: 18,
    marginVertical: 2,
    flex: 2,
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
    fontSize: 11,
    textAlign: "right",
    color: "#828282",
  },
  button: {
    padding: 0,
    marginLeft: "auto",
  },
  description: {
    fontSize: 11,
    marginVertical: 2,
  },
  secondary: {
    fontSize: 11,
    color: "#828282",
    margin: 0,
    padding: 0,
    flex: 1,
  },
});

export default UstadzRequestList;
