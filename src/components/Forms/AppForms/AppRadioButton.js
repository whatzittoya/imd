import React from "react";
import { View, StyleSheet } from "react-native";
import RadioButtonList from "../../SmallComponents/RadioButton";
import SubHeaderText from "../../TextComponents/SubHeaderText";

function AppRadioButton({ title, items, selectedItem, handleChange }) {
  return (
    <View style={styles.container}>
      <SubHeaderText label={title} />
      <RadioButtonList
        items={items}
        handleChange={handleChange}
        selectedItem={selectedItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default AppRadioButton;
