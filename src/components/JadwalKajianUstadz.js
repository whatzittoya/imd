//import react native
import {
  View,
  FlatList,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
//import usestate and useeffect
import { useState, useEffect } from "react";
import styles from "../style/global";
import { List } from "react-native-paper";
import EmptyDisplay from "./EmptyDisplay";
import Title from "./SmallComponents/Title";
import { useNavigation } from "@react-navigation/native";

const JadwalKajianUstadz = ({}) => {
  const navigation = useNavigation();

  const RequestList = [
    {
      id: 1,
      Masjid: "Masjid Al-Huda",
      date: "2020-01-01 09:00",
    },
    {
      id: 2,
      Masjid: "Masjid Ar-Rahim",
      date: "2020-01-01 09:00",
    },
    {
      id: 3,
      Masjid: "Masjid At-Taqwa",
      date: "2020-01-01 09:00",
    },
  ];

  const refresh = () => {
    console.log("refresh");
  };

  const openUstadzRequest = () => {
    //create navigation to dakwah form
    navigation.navigate("UstadzRequest");
  };
  if (!RequestList) {
    return <EmptyDisplay refresh={refresh}></EmptyDisplay>;
  }
  return (
    <View style={styles.container}>
      <Title title="Kajian Ustadz yang sudah terdaftar"></Title>
      <FlatList
        data={RequestList}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={openUstadzRequest}>
              <List.Item
                title={item.Masjid}
                style={styles.list}
                right={(props) => {
                  return (
                    <View style={styles.contentSide}>
                      <Text>{item.date}</Text>
                    </View>
                  );
                }}
              />
            </TouchableOpacity>
          );
        }}
      ></FlatList>
    </View>
  );
};
const color = ["#EB5757", "#219653"];
const stylesLocal = StyleSheet.create({
  bgCircle: {
    width: 25,
    height: 25,
    borderRadius: 25,
    color: "white",
    paddingLeft: 8,
    paddingTop: 2,
  },
});

export default JadwalKajianUstadz;
