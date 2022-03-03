import React from "react";
import { View, StyleSheet, Text } from "react-native";
import colors from "../../style/colors";
import fontStyle from "../../style/fontStyle";

function SubHeaderText({ label, typecolors = "activetxt" }) {
  return (
    <View style={styles.container}>
      <Text style={[styles.txtStyles, { color: colors[typecolors] }]}>
        {label}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  txtStyles: {
    fontFamily: fontStyle.medium,
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 14,
    color: colors.activetxt,
    lineHeight: 17,
    letterSpacing: 0.5,
  },
});
export default SubHeaderText;
