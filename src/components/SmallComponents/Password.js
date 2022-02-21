import React, { useState } from "react";
import {
  View,
  Button,
  Text,
  TouchableOpacity,
  Platform,
  StyleSheet,
  Image,
  ScrollView,
  Modal,
  Pressable,
  Linking,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { TextInput } from "react-native-paper";
const Password = ({ pass, setPass, label }) => {
  // const pass=props.pass
  // const setPass = props.pass;
  // const pass = props.pass;
  const [hidePass, setHidePass] = useState(true);
  return (
    <View style={styles.contPassword}>
      <TextInput
        secureTextEntry={hidePass}
        style={styles.inputPassword}
        label={label}
        value={pass}
        onChangeText={(text) => setPass(text)}
      />
      <Icon
        name={hidePass ? "eye-slash" : "eye"}
        size={15}
        color="grey"
        onPress={() => setHidePass(!hidePass)}
        style={styles.iconPassword}
      />
    </View>
  );
};

export default Password;

const styles = StyleSheet.create({
  inputPassword: {
    flex: 2,
    marginRight: -20,
  },
  iconPassword: {
    alignSelf: "center",
  },
  contPassword: {
    marginRight: 20,
    marginLeft: 20,
    backgroundColor: "#E7E7E7",
    flexDirection: "row",
    alignContent: "center",
  },
});
