import React from "react";
import { View, StyleSheet } from "react-native";

function HorizontalSeparator(props) {
  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: 10,
  },
});

export default HorizontalSeparator;
