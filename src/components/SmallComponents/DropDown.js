//import usestate
import { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Picker } from "@react-native-picker/picker";
import styles from "../../style/global";

const Dropdown = (props) => {
  const data = props.data;
  const handleChange = props.handleChange;

  const [selected, setSelected] = useState(data[0]);
  useEffect(() => {
    handleChange(selected);
  }, [selected]);

  return (
    <View style={styles.picker}>
      <Picker
        selectedValue={selected}
        onValueChange={(itemValue, itemIndex) => setSelected(itemValue)}
      >
        {data.map((row) => {
          return <Picker.Item label={row} value={row} />;
        })}
      </Picker>
    </View>
  );
};
export default Dropdown;
