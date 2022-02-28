//create horizontal list of images
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import styles from "../style/global";

const HorizontalList = ({ results }) => {
  if (!results) {
    return null;
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={results}
        keyExtractor={(result) => result.id.toString()}
        horizontal
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => {}}>
              <View style={stylesLocal.content}>
                <Image style={stylesLocal.image} source={{ uri: item.image }} />
                <Text style={stylesLocal.name}>{item.name}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      ></FlatList>
    </View>
  );
};

//create style for horizontal list
const stylesLocal = StyleSheet.create({
  image: {
    marginHorizontal: 5,
    width: 60,
    height: 60,
    borderRadius: 50,
    marginBottom: 5,
    alignSelf: "center",
    marginRight: 20,
    marginLeft: 20,
    marginBottom: 10,
    marginTop: 10,
    paddingRight: 10,
  },
  title: {
    fontSize: 18,
    marginVertical: 2,
    alignSelf: "auto",
  },
  date: {
    fontSize: 12,
    marginVertical: 2,
  },
  name: {
    fontSize: 12,
    marginVertical: 2,
    alignSelf: "center",
  },
});

//export horizontal list
export default HorizontalList;
