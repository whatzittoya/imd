import React, { useState, useEffect } from "react";
//import react native
import { View, StyleSheet, ScrollView } from "react-native";

import Modal from "./SmallComponents/Modal";
import Card from "../components/SmallComponents/Card";

import Screen from "./SmallComponents/Screen";
import Splitter from "./SmallComponents/Splitter";

import {
  Form,
  FormField,
  FormCalendar,
  FormRadio,
  FormPicker,
  SubmitButton,
} from "../components/Forms";

import colors from "../style/colors";
import Devider from "./SmallComponents/Devider";

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

const DakwahForm = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [state, setState] = useState({
    title: "",
    date: new Date(),
    tipe_kajian: "",
    thematic: "",
    sylabus: "",
  });

  const handleSubmit = (item, { resetForm }) => {
    // e.preventDefault();
    console.log(item);
    setModalVisible(true);

    resetForm();
  };

  return (
    <>
      <Screen style={styles.container}>
        <ScrollView>
          <View style={styles.formcontainer}>
            <Form
              initialValues={{
                tanggal: new Date(),
                tipe: tipe_kajian[0],
                tema: thematic[0],
                silabus: sylabus[0],
                judul: "",
              }}
              onSubmit={handleSubmit}
            >
              <FormCalendar
                title="Tanggal & Waktu"
                maxLength={255}
                name="tanggal"
              />
              <Splitter />
              <FormRadio title="Tipe Kajian" items={tipe_kajian} name="tipe" />
              <Splitter />
              <FormPicker title="Tema Kajian" items={thematic} name="tema" />
              <Splitter />
              <FormPicker title="Silabus" items={sylabus} name="silabus" />
              <Splitter />
              <FormField
                title="Judul Materi"
                name="judul"
                placeholdertxt="Judul Materi"
                multiline={true}
              />
              <Splitter />
              <SubmitButton title="Post" />
            </Form>
          </View>
        </ScrollView>
        <Devider />
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
    backgroundColor: colors.white,
    justifyContent: "space-between",
  },
  masjidcontainer: {
    flex: 0.1,
  },
});

export default DakwahForm;
