import React, { useState, useEffect } from "react";
//import react native
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Button, Text } from "react-native-paper";
import styles from "../style/global";
import Password from "./SmallComponents/Password";

const ChangePasswordForm = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const old_pass = "12345678";
  const [state, setState] = useState({
    old_pass: "",
    new_pass: "",
    confirm_pass: "",
  });
  const [stateLabel, setStateLabel] = useState({
    old_pass: "",
    new_pass: "",
    confirm_pass: "",
  });
  const handleChange = (name, text) => {
    setState({
      ...state,
      [name]: text,
    });
  };

  const handleChangeLabel = (name, text) => {
    setStateLabel({
      ...stateLabel,
      [name]: text,
    });
  };
  const handleResetLabel = () => {
    const name = "old_pass";
    const text = "";
    setStateLabel({
      old_pass: "",
      new_pass: "",
      confirm_pass: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleResetLabel();
    validatePassword();
  };

  const validatePassword = () => {
    if (state.old_pass === old_pass) {
      if (validateNewPassword()) {
        if (state.new_pass === state.confirm_pass) {
          return true;
        } else {
          //  Password Baru minimal 8 karakter
          handleChangeLabel(
            "confirm_pass",
            " Konfirmasi Password tidak sama dengan Password Baru"
          );
          return false;
        }
      }
    } else {
      console.log("Password Lama Salah");
      handleChangeLabel("old_pass", "Password Lama tidak sesuai");
      console.log(stateLabel);

      return false;
    }
  };

  const validateNewPassword = () => {
    if (state.new_pass.length < 8) {
      handleChangeLabel("new_pass", "Password Baru minimal 8 karakter");
      return false;
    } else {
      return true;
    }
  };

  return (
    <View style={styles.container}>
      <View style={stylesLocal.form}>
        <Password
          pass={state.old_pass}
          label="Password Lama"
          setPass={(text) => {
            handleChange("old_pass", text);
          }}
        />
        <Text style={stylesLocal.errorLabel}>{stateLabel.old_pass}</Text>

        <Password
          pass={state.new_pass}
          label="Password Baru"
          setPass={(text) => {
            handleChange("new_pass", text);
          }}
        />
        <Text style={stylesLocal.errorLabel}>{stateLabel.new_pass}</Text>

        <Password
          pass={state.confirm_pass}
          label="Konfirmasi Password"
          setPass={(text) => {
            handleChange("confirm_pass", text);
          }}
        />
        <Text style={stylesLocal.errorLabel}>{stateLabel.confirm_pass}</Text>

        <Button mode="contained" onPress={handleSubmit}>
          Ubah
        </Button>
      </View>
    </View>
  );
};

const stylesLocal = StyleSheet.create({
  errorLabel: {
    color: "red",
    fontSize: 12,
    marginTop: 5,
    marginBottom: 5,
    marginStart: 20,
  },
  form: {
    flexDirection: "column",
  },
});

export default ChangePasswordForm;
