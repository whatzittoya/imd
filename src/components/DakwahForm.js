import React, { useState, useEffect } from "react";
//import react native
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { TextInput, Button } from "react-native-paper";
import DatePicker from "./SmallComponents/DatePicker";
import styles from "../style/global";
import CheckBox from "./SmallComponents/CheckBox";
import RadioButton from "./SmallComponents/RadioButton";
import DropDown from "./SmallComponents/DropDown";
import Modal from "./SmallComponents/Modal";
import Card from "../components/SmallComponents/Card";

const DakwahForm = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [state, setState] = useState({
    title: "",
    date: new Date(),
    tipe_kajian: "",
    thematic: "",
    sylabus: "",
  });
  // const [test, setTest] = useState();

  // useEffect(() => {
  //   console.log(test);
  // }, [test]);

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
    // props.onSubmit(state);
    // setState({
    //   title: "",
    //   date: new Date(),
    //   description: "",
    //   thematic: "",
    // });
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
      <View style={styles.container}>
        {/* create button save and cancel */}
        <View style={styles.buttonContainer}>
          <Button icon="check" mode="contained" onPress={handleSubmit}>
            Simpan
          </Button>
          <Button icon="cancel" mode="outlined">
            Batal
          </Button>
        </View>
        <DatePicker
          date={state.date}
          setDate={(value) =>
            setState({
              ...state,
              date: value,
            })
          }
        ></DatePicker>
        <Text style={styles.title}>Tipe Kajian</Text>

        <RadioButton
          data={tipe_kajian}
          handleChange={(text) => handleChange("tipe_kajian", text)}
        ></RadioButton>
        <Text style={styles.title}>Tema Kajian</Text>
        <DropDown
          data={thematic}
          handleChange={(text) => handleChange("thematic", text)}
        ></DropDown>
        <Text style={styles.title}>Sylabus</Text>
        <DropDown
          data={sylabus}
          handleChange={(text) => handleChange("sylabus", text)}
        ></DropDown>
        <TextInput
          label="Judul Materi"
          value={state.title}
          onChangeText={(text) => handleChange("title", text)}
          mode="outlined"
          style={styles.input}
        />

        <Card title="Nama Masjid" data={MasjidProfile} />

        <Modal
          visible={modalVisible}
          setVisible={setModalVisible}
          data={{ title: "Tersimpan", message: "" }}
          style={{ backgroundColor: "#27AE60" }}
        ></Modal>
        {/* <CheckBox data={thematic} handleChange={handleChangeThematic} /> */}
      </View>
    </>
  );
};

export default DakwahForm;
