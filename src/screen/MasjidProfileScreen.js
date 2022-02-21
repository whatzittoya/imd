//create dakwah form react native
import React, { useState, useEffect } from "react";
//import react native
import { View, ScrollView } from "react-native";
import { Divider, List } from "react-native-paper";
import Card from "../components/SmallComponents/Card";
import styles from "../style/global";
import KajianRequest from "../components/ListKajianWithRequest";
import OtherMenu from "../components/OtherMenuProfile";
import SignOut from "../components/SmallComponents/SignOutBtn";
const MasjidProfileScreen = () => {
  const MasjidProfile = {
    name: "Masjid Dakwah",
    img: "https://t3.ftcdn.net/jpg/02/50/12/70/360_F_250127043_8rncYCl0DJNGwRq9IVL9WrEh7OKKWuXV.jpg",
  };
  return (
    <ScrollView style={styles.screenContainer}>
      <Card title="Nama Masjid" data={MasjidProfile} />
      <Divider />
      <KajianRequest></KajianRequest>
      <OtherMenu></OtherMenu>
      <SignOut></SignOut>
    </ScrollView>
  );
};

export default MasjidProfileScreen;
