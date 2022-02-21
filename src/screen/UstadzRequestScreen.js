import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import UstadzRequestList from "../components/UstadzRequestList";
import styles from "../style/global";

export default function UstadzRequestScreen({ data }) {
  const kajian = [
    {
      title: "Dakwah1",
      name: "Ust Abdul Somad",
      image:
        "https://beritamerdeka.net/files/images/20200425-20200425-060733.jpg",
      id: "1",
      date: "2022-02-02 09:00:00",
      speciality: "Akidah",
      education: "LC",
    },
    {
      title: "Dakwah2",
      name: "Ust Adi Hidayat",
      image:
        "https://pbs.twimg.com/profile_images/1185000951255572480/hi_Mh-6A_400x400.jpg",
      id: "2",
      date: "2022-02-04 09:00:00",
      speciality: "Fiqih",
      education: "LC",
    },
    {
      title: "Dakwah3",
      name: "Ust Khalid Basalamah",
      image:
        "https://assets.promediateknologi.com/crop/0x0:0x0/x/photo/2022/02/02/3781305451.jpg",
      id: "3",
      date: "2022-02-08 20:00:00",
      speciality: "Akidah",
      education: "LC",
    },
  ];

  return (
    <View style={styles.container}>
      <UstadzRequestList results={kajian}></UstadzRequestList>
    </View>
  );
}
