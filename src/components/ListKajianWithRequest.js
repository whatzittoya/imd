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

const KajianRequest = ({}) => {
  const navigation = useNavigation();

  const RequestList = [
    {
      id: 1,
      title: "Kajian 1",
      request: 2,
      date: "2020-01-01",
    },
    {
      id: 2,
      title: "Kajian 2",
      request: 1,
      date: "2020-01-01",
    },
    {
      id: 3,
      title: "Kajian 3",
      request: 0,
      date: "2020-01-01",
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
      <Title title="Memilih Ustadz"></Title>
      <FlatList
        data={RequestList}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={openUstadzRequest}>
              <List.Item
                title={item.title}
                style={styles.list}
                right={(props) => {
                  return (
                    <View style={styles.contentSide}>
                      <Text
                        style={[
                          stylesLocal.bgCircle,
                          {
                            backgroundColor:
                              item.request == 0 ? color[0] : color[1],
                          },
                        ]}
                      >
                        {item.request}
                      </Text>
                      <List.Icon {...props} icon="account" />
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

export default KajianRequest;
