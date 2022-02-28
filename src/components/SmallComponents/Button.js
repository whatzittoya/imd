import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

import colors from "../../style/colors";
import { FontAwesome5 } from "@expo/vector-icons";
import SubHeader2Text from "../TextComponents/SubHeader2Text";

function Button({
  title,
  icon,
  onPress,
  colorbg = "primary",
  colortxt = "white",
  width = "100%",
}) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[colorbg], width }]}
      onPress={onPress}
    >
      {icon && (
        <FontAwesome5
          size={20}
          name={icon}
          color={colors.white}
          style={styles.icon}
        />
      )}
      <SubHeader2Text addStyle={[styles.text, { color: colors[colortxt] }]}>
        {title}
      </SubHeader2Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    width: "100%",
    marginVertical: 10,
    flexDirection: "row",
  },
  text: {
    margin: 10,
    flex: 1,
    color: colors.white,
    fontSize: 15,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  icon: {
    marginLeft: 10,
    marginRight: 5,
  },
});

export default Button;
