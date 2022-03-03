//import usestate
import { useState, useEffect } from "react";
import { RadioButton } from "react-native-paper";
import { View, TouchableOpacity } from "react-native";
import SubHeader2Text from "../TextComponents/SubHeader2Text";
import Devider from "./Devider";

const RadioButtonList = (props) => {
  const data = props.items;
  const selectedItem = props.selectedItem;
  const handleChange = props.handleChange;

  const [checked, setChecked] = useState(selectedItem);

  useEffect(() => {
    handleChange(checked);
  }, [checked]);

  return (
    <View>
      {data.map((item) => {
        return (
          <View key={item}>
            <TouchableOpacity
              style={{ flexDirection: "row", alignContent: "center" }}
              onPress={() => setChecked(item)}
            >
              <View>
                <RadioButton
                  value={item}
                  status={checked === item ? "checked" : "unchecked"}
                  onPress={() => setChecked(item)}
                />
              </View>
              <View style={{ flex: 1, alignSelf: "center" }}>
                <SubHeader2Text>{item}</SubHeader2Text>
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
