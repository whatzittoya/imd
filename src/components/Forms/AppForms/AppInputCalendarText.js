import React from "react";
import { View, StyleSheet } from "react-native";
import DatePicker from "./../../SmallComponents/DatePicker";
import SubHeaderText from "../../TextComponents/SubHeaderText";

function AppInputCalendarText({ title, date, setDate, ...otherProps }) {
  return (
    <View style={styles.container}>
      <SubHeaderText label={title} />
      <DatePicker date={date} setDate={setDate} {...otherProps} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default AppInputCalendarText;
