import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { Checkbox } from "react-native-paper";

const CheckBoxList = (props) => {
  const data = props.data;
  const props_checked = props.checked;
  const handleChange = props.handleChange;

  const [checked, setChecked] = useState([]);
  const [st, setSt] = useState();
  const handleCheck = (id) => {
    if (checked.includes(id)) {
      setChecked(checked.filter((item) => item !== id));
    } else {
      setChecked([...checked, id]);
    }
  };
  useEffect(() => {
    handleChange(checked);
  }, [checked]);

  return (
    <>
      {data.map((row) => {
        return (
          <TouchableOpacity
            style={{ flexDirection: "row", alignContent: "center" }}
            onPress={() => {
              handleCheck(row);
            }}
          >
            <View style={{ flex: 1 }}>
              <Checkbox
                status={checked.includes(row) ? "checked" : "unchecked"}
                onPress={() => {
                  handleCheck(row);
                }}
              />
            </View>
            <View style={{ flex: 4, alignSelf: "center" }}>
              <Text>{row}</Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </>
  );
};

export default CheckBoxList;
