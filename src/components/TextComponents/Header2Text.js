import React from "react";
import { View, StyleSheet, Text } from "react-native";

function Header2Text(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.txtStyles}>Header Test 2</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  txtStyles: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 16,
    color: "#4F4F4F",
    lineHeight: 19,
    letterSpacing: 0.3,
  },
});
export default Header2Text;
