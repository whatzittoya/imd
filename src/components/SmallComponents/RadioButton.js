//import usestate
import { useState, useEffect } from "react";
import { RadioButton } from "react-native-paper";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const RadioButtonList = (props) => {
  const data = props.data;
  const handleChange = props.handleChange;

  const [checked, setChecked] = useState(data[0]);
  useEffect(() => {
    handleChange(checked);
  }, [checked]);

  return (
    <View>
      {data.map((row) => {
        return (
          <>
            <TouchableOpacity
              style={{ flexDirection: "row", alignContent: "center" }}
              onPress={() => setChecked(row)}
            >
              <View style={{ flex: 1 }}>
                <RadioButton
                  value={row}
                  status={checked === row ? "checked" : "unchecked"}
                  onPress={() => setChecked(row)}
                />
              </View>
              <View style={{ flex: 4, alignSelf: "center" }}>
                <Text>{row}</Text>
              </View>
            </TouchableOpacity>
          </>
        );
      })}
    </View>
  );
};
export default RadioButtonList;
