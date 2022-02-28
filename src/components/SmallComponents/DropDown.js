//import usestate
import { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Modal,
  FlatList,
} from "react-native";

import Constants from "expo-constants";
import SubHeaderText from "../TextComponents/SubHeaderText";
import Screen from "./Screen";
import PickerItemComponents from "./PickerItemComponents";

import { BlurView } from "expo-blur";
import colors from "../../style/colors";
import InputText from "../Forms/InputForms/InputText";

const Dropdown = ({ data, handleChange, numberOfColumns = 1, placeholder }) => {
  const datas = data;
  const handleChange = handleChange;

  const [selected, setSelected] = useState(datas[0]);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    handleChange(selected);
  }, [selected]);

  return (
    <View>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View>
          {selected ? (
            <InputText
              value={selected}
              icon="angle-double-down"
              editable={false}
              placeholdertxt={placeholder}
            />
          ) : (
            <SubHeaderText label="klik disini" />
          )}
        </View>
      </TouchableWithoutFeedback>

      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <BlurView intensity={100} tint="dark" style={styles.blurContainer}>
          <View
            style={{
              height: "40%",
              padding: 20,
              borderTopStartRadius: 20,
              borderTopRightRadius: 20,
              backgroundColor: colors.bgCard,
            }}
          >
            <Screen>
              <FlatList
                data={datas}
                keyExtractor={(item) => item.toString()}
                numColumns={numberOfColumns}
                renderItem={({ item }) => (
                  <PickerItemComponents
                    label={item}
                    selected={selected}
                    onPress={() => {
                      setModalVisible(false);
                      setSelected(item);
                    }}
                  />
                )}
              ></FlatList>
            </Screen>
          </View>
        </BlurView>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  blurContainer: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    justifyContent: "flex-end",
  },
});

export default Dropdown;
