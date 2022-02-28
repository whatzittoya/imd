//import usestate
import { useState, useEffect } from "react";
import { RadioButton } from "react-native-paper";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import SubHeader2Text from "../TextComponents/SubHeader2Text";
import Devider from "./Devider";

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
          <View key={row}>
            <TouchableOpacity
              style={{ flexDirection: "row", alignContent: "center" }}
              onPress={() => setChecked(row)}
            >
              <View>
                <RadioButton
                  value={row}
                  status={checked === row ? "checked" : "unchecked"}
                  onPress={() => setChecked(row)}
                />
              </View>
              <View style={{ flex: 1, alignSelf: "center" }}>
                <SubHeader2Text>{row}</SubHeader2Text>
              </View>
            </TouchableOpacity>

            <Devider />
          </View>
        );
      })}
    </View>
  );
};
export default RadioButtonList;
