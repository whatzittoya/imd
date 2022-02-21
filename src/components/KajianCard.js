//import react native
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import { Feather } from "@expo/vector-icons";

import styles from "../style/global";

const KajianCard = ({ item, isMasjid }) => {
  return (
    <View style={[styles.content, { paddingBottom: 10 }]}>
      <Image style={stylesLocal.image} source={{ uri: item.image }} />
      <View style={stylesLocal.textContainer}>
        <View style={stylesLocal.titleContainer}>
          <Text style={stylesLocal.title}>{item.title}</Text>
          {isMasjid && (
            <Text style={[stylesLocal.status, colorStatus[item.status]]}>
              {item.statusText}
            </Text>
          )}
        </View>
        <Text style={stylesLocal.secondary}>{item.thematic}</Text>
        <Text style={stylesLocal.secondary}>{item.sylabus}</Text>
        <View style={stylesLocal.titleContainer}>
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
  secondary: {
    fontSize: 11,
    color: "#828282",
    margin: 0,
    padding: 0,
    flex: 1,
  },
});

export default KajianCard;
