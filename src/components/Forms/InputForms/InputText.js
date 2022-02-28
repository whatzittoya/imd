import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import defaultStyles from "../../../style/styles";
import { FontAwesome5 } from "@expo/vector-icons";

function InputText({
  icon,
  placeholdertxt = "",
  width = "100%",
  ...otherProps
}) {
  return (
    <View style={[styles.container, { width }]}>
      <TextInput
        placeholderTextColor={defaultStyles.colors.noactivetxt}
        placeholder={placeholdertxt}
        style={[defaultStyles.text, styles.inputs]}
        {...otherProps}
      />

      {icon && (
        <FontAwesome5
          name={icon}
          size={15}
          color={defaultStyles.colors.activetxt}
          style={styles.icon}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f8f4f4",
    borderRadius: 5,
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginVertical: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    paddingLeft: 10,
  },
  inputs: {
    paddingLeft: 0,
    flex: 1,
  },
});

export default InputText;
