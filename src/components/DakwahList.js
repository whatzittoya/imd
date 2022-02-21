//import react native
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import { Button, Divider } from "react-native-paper";
//import usestate and useeffect
import { useState, useEffect } from "react";
import EmptyDisplay from "./EmptyDisplay";
import styles from "../style/global";
import { useNavigation } from "@react-navigation/native";
import KajianCard from "./KajianCard";

const DakwahList = ({ results, withStatus }) => {
  const [filter, setFilter] = useState(1);
  const [isMasjid, setIsMasjid] = useState(false);
  const changeView = (val, actvbtn) => {
    setFilteredResults(results.filter((item) => item.status === val));
    setActivebtn(actvbtn);
  };
  useEffect(() => {
    setIsMasjid(withStatus);
  }, [withStatus]);

  const navigation = useNavigation();
  const openLink = () => {
    //create navigation to dakwah form
    if (isMasjid) {
      // navigation.navigate("PostDakwah");
    } else {
      navigation.navigate("SubmitRequest");
    }
  };

  if (!results) {
    return <EmptyDisplay refresh={refresh}></EmptyDisplay>;
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={results}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                openLink();
              }}
            >
              <KajianCard item={item} isMasjid={isMasjid}></KajianCard>
            </TouchableOpacity>
          );
        }}
      ></FlatList>
    </View>
  );
};

const stylesLocal = StyleSheet.create({
  txtBtnDefault: {
    fontSize: 12,
    color: "black",
  },
  txtBtnSelected: {
    fontSize: 12,
    color: "#219653",
  },
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#F6F6F6",
  },
  content: {
    backgroundColor: "#F6F6F6",
    flexDirection: "row",
  },

  description: {
    fontSize: 11,
    marginVertical: 2,
  },
});

export default DakwahList;
