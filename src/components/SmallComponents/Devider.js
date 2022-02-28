import React from "react";
import { View, StyleSheet } from "react-native";

function Devider(props) {
  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    borderBottomColor: "#E0E0E0",
    borderBottomWidth: 1,
    flex: 1,
    marginTop: 5,
    width: "80%",
  },
});

export default Devider;
