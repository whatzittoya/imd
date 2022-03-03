import React from "react";
import { View, StyleSheet } from "react-native";
import Dropdown from "../../SmallComponents/DropDown";
import SubHeaderText from "../../TextComponents/SubHeaderText";

function AppPickerText({
  title,
  items,
  onSelectItem,
  numberOfColumn = 1,
  selectedItem,
  placeholder,
  ...otherProps
}) {
  return (
    <View style={styles.container}>
      <SubHeaderText label={title} />
      <Dropdown
        data={items}
        onSelectItem={onSelectItem}
        numberOfColumn={numberOfColumn}
        placeholder={placeholder}
        selectedItem={selectedItem}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});

export default AppPickerText;
