import React from "react";
import { View, StyleSheet } from "react-native";
import DatePicker from "./../../SmallComponents/DatePicker";
import SubHeaderText from "../../TextComponents/SubHeaderText";

function AppInputCalendarText({ title, value, onChangeText, ...otherProps }) {
  return (
    <View style={styles.container}>
      <SubHeaderText label={title} />
      <DatePicker value={value} setDate={onChangeText} {...otherProps} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default AppInputCalendarText;
