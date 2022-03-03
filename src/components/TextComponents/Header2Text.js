import React from "react";
import { View, StyleSheet, Text } from "react-native";
import fontStyle from "../../style/fontStyle";

function Header2Text({ children }) {
  return (
    <View style={styles.container}>
      <Text style={[styles.txtStyles]}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  txtStyles: {
    fontFamily: fontStyle.bold,
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 16,
    color: "#4F4F4F",
    lineHeight: 19,
    letterSpacing: 0.3,
  },
});
export default Header2Text;
