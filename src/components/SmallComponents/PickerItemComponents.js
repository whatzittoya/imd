import React from "react";
import { TouchableOpacity, StyleSheet, View } from "react-native";
import SubHeaderText from "../TextComponents/SubHeaderText";
import Devider from "./Devider";

function PickerItemComponents({ selected, label, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <SubHeaderText
          label={label}
          typecolors={selected && selected == label ? "primary" : "activetxt"}
        ></SubHeaderText>
        <Devider />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    marginVertical: 5,
    padding: 5,
    alignItems: "center",
  },
});

export default PickerItemComponents;
