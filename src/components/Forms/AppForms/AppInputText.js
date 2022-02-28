import React from "react";
import { View, StyleSheet } from "react-native";
import InputText from "../InputForms/InputText";
import SubHeaderText from "../../TextComponents/SubHeaderText";

function AppInputText({ title, icon, width = "100%", ...otherProps }) {
  return (
    <View style={[styles.container, { width }]}>
      <SubHeaderText label={title} />
      <InputText icon={icon} {...otherProps} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default AppInputText;
