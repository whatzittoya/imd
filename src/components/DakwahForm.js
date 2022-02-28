import React, { useState, useEffect } from "react";
//import react native
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
//import { Button } from "react-native-paper";

import CheckBox from "./SmallComponents/CheckBox";
import RadioButton from "./SmallComponents/RadioButton";
import DropDown from "./SmallComponents/DropDown";
import Modal from "./SmallComponents/Modal";
import Card from "../components/SmallComponents/Card";

import Screen from "./SmallComponents/Screen";
import AppInputText from "./Forms/AppForms/AppInputText";
import AppInputCalendarText from "./Forms/AppForms/AppInputCalendarText";
import AppPickerText from "./Forms/AppForms/AppPickerText";
import Button from "./SmallComponents/Button";

import colors from "../style/colors";
import AppRadioButton from "./Forms/AppForms/AppRadioButton";

const DakwahForm = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [state, setState] = useState({
    title: "",
    date: new Date(),
    tipe_kajian: "",
    thematic: "",
    sylabus: "",
  });

  const handleChange = (name, text) => {
    setState({
      ...state,
      [name]: text,
    });
  };
  function handleChangeThematic(text) {
    handleChange("thematic", text);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
    setModalVisible(true);
  };
  const thematic = [
    "tematik1",
    "tematik2",
    "tematik3",
    "tematik4",
    "tematik5",
    "tematik6",
    "tematik7",
  ];
  const sylabus = ["sylabus1", "sylabus2", "sylabus3", "sylabus4"];
  const tipe_kajian = ["Kajian1", "Kajian2", "Kajian3"];
  const MasjidProfile = {
    name: "Masjid Dakwah",
    img: "https://t3.ftcdn.net/jpg/02/50/12/70/360_F_250127043_8rncYCl0DJNGwRq9IVL9WrEh7OKKWuXV.jpg",
  };
  return (
    <>
      <Screen style={styles.container}>
        <ScrollView>
          <View style={styles.formcontainer}>
            <AppInputCalendarText
              title="Tanggal & Waktu"
              date={state.date}
              setDate={(value) =>
                setState({
                  ...state,
                  date: value,
                })
              }
            ></AppInputCalendarText>

            <AppRadioButton
              title="Tipe Kajian"
              data={tipe_kajian}
              handleChange={(text) => handleChange("tipe_kajian", text)}
            />

            <AppPickerText
              title="Tema Kajian"
              data={thematic}
              handleChange={(text) => handleChange("thematic", text)}
            />

            <AppPickerText
              title="Silabus"
              data={sylabus}
              handleChange={(text) => handleChange("sylabus", text)}
            />

            <AppInputText
              title="Judul Materi"
              placeholdertxt="Judul Kajian"
              value={state.title}
              onChangeText={(text) => handleChange("title", text)}
              multiline={true}
            />
            <View style={styles.buttonContainer}>
              <Button
                title="Post"
                icon="check-circle"
                onPress={handleSubmit}
                width="35%"
              />
            </View>
          </View>
        </ScrollView>

        <View style={styles.masjidcontainer}>
          <Card title="Nama Masjid" data={MasjidProfile} />
        </View>

        <Modal
          visible={modalVisible}
          setVisible={setModalVisible}
          data={{ title: "Tersimpan", message: "" }}
          style={{ backgroundColor: "#27AE60" }}
        ></Modal>
      </Screen>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  buttonContainer: {
    width: "100%",
    alignItems: "center",
  },
  formcontainer: {
    backgroundColor: colors.bgCard,
    height: 800,
    justifyContent: "space-between",
  },
  masjidcontainer: {
    flex: 0.1,
  },
});

export default DakwahForm;
