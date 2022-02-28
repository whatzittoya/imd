import React from "react";
import { View, StyleSheet, Text } from "react-native";
import colors from "../../style/colors";

function SubHeader2Text({ addStyle, children, ...otherProps }) {
  return (
    <View style={styles.container}>
      <Text style={[styles.txtStyles, addStyle]} {...otherProps}>
        {children}
      </Text>
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
    color: colors.activetxt,
    lineHeight: 15,
    letterSpacing: 0.3,
  },
});
export default SubHeader2Text;
