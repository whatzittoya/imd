import React from "react";
import { View, StyleSheet } from "react-native";
import RadioButtonList from "../../SmallComponents/RadioButton";
import SubHeaderText from "../../TextComponents/SubHeaderText";

function AppRadioButton({ title, data, handleChange }) {
  return (
    <View style={styles.container}>
      <SubHeaderText label={title} />
      <RadioButtonList data={data} handleChange={handleChange} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default AppRadioButton;
