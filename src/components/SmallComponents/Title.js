//import text view from react-native
import { StyleSheet, Text, View } from "react-native";
import styles from "../../style/global";

const Title = (props) => {
  return (
    <View style={styles.content}>
      <Text style={stylesLocal.title}>{props.title}</Text>
    </View>
  );
};

const stylesLocal = StyleSheet.create({
  title: {
    fontSize: 14,
    marginVertical: 2,
    alignSelf: "flex-start",
    padding: 10,
    fontWeight: "bold",
  },
});

export default Title;
