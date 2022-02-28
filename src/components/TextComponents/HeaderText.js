import React from "react";
import { View, StyleSheet, Text } from "react-native";

function HeaderText(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.txtStyles}>Header Test</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  txtStyles: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 16,
    color: "#4F4F4F",
    lineHeight: 19,
    letterSpacing: 0.3,
  },
});
export default HeaderText;
