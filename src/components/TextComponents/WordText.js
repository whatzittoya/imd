import React from "react";
import { View, StyleSheet, Text } from "react-native";

function WordText(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.txtStyles}>Word</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  txtStyles: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 12,
    color: "#4F4F4F",
    lineHeight: 15,
    letterSpacing: 0.3,
  },
});
export default WordText;
