import React from "react";
import { View, StyleSheet } from "react-native";
import Dropdown from "../../SmallComponents/DropDown";
import SubHeaderText from "../../TextComponents/SubHeaderText";

function AppPickerText({ title, data, handleChange, ...otherProps }) {
  return (
    <View style={styles.container}>
      <SubHeaderText label={title} />
      <Dropdown data={data} handleChange={handleChange} {...otherProps} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});

export default AppPickerText;
