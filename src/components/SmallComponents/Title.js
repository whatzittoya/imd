//import text view from react-native
import { StyleSheet, Text, View } from "react-native";
import fontStyle from "../../style/fontStyle";
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
    fontFamily: fontStyle.medium,
    fontSize: 14,
    marginVertical: 2,
    lineHeight: 17,
    alignSelf: "flex-start",
    // padding: 10,
    fontWeight: "500",
    letterSpacing: 1,
  },
});

export default Title;
