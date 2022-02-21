//import react native
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import { Button, Divider } from "react-native-paper";
//import usestate and useeffect
import { useState, useEffect } from "react";
import styles from "../style/global";
import RequestForm from "../components/RequestForm";
import KajianCard from "../components/KajianCard";
import Title from "../components/SmallComponents/Title";
const Kajian = {
  title: "Dakwah1",
  name: "Ust Abdul Somad",
  image:
    "https://img.theculturetrip.com/wp-content/uploads/2017/11/masjid_dian_al-mahri_di_depok_kubah_emas.jpg",
  id: "1",
  date: "2022-02-02 09:00:00",
  thematic: "Thematic1",
  sylabus: "Sylabus1",
  masjid: "Masjid1",
  status: "0",
  statusText: "Belum ada ustadz",
};
const SubmitRequest = () => {
  return (
    <View style={styles.container}>
      <KajianCard item={Kajian} isMasjid={false}></KajianCard>
      <Title title="Ayo Masukkan Kafarah Ustadz" />
      <RequestForm></RequestForm>
    </View>
  );
};
export default SubmitRequest;
