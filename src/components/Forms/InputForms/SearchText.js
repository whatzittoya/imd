import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import defaultStyles from "../../style/styles";
import { FontAwesome5 } from "@expo/vector-icons";

function SearchText({ width = "100%", ...otherProps }) {
  return (
    <View style={[styles.container, { width }]}>
      <FontAwesome5
        name="search"
        size={15}
        color={defaultStyles.colors.activetxt}
        style={styles.icon}
      />

      <TextInput
        placeholderTextColor={defaultStyles.colors.noactivetxt}
        placeholder="Cari disini..."
        style={[defaultStyles.text, styles.inputs]}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.bgCard,
    borderRadius: 20,
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
    paddingLeft: 5,
    flex: 1,
  },
});

export default SearchText;
