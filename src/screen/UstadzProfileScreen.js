//create dakwah form react native
import React, { useState, useEffect } from "react";
//import react native
import { View, ScrollView } from "react-native";
import { Divider, List } from "react-native-paper";
import Card from "../components/SmallComponents/Card";
import styles from "../style/global";
import JadwalKajianUstadz from "../components/JadwalKajianUstadz";
import OtherMenu from "../components/OtherMenuProfile";
import SignOut from "../components/SmallComponents/SignOutBtn";

const UstadzProfileScreen = () => {
  const UstadzProfile = {
    name: "Ust. Abdul Somad",
    img: "https://assets.pikiran-rakyat.com/crop/0x0:0x0/x/photo/2021/10/01/3717996597.jpg",
  };
  return (
    <ScrollView style={styles.screenContainer}>
      <Card title="Nama Utadz" data={UstadzProfile} />
      <Divider />
      <JadwalKajianUstadz></JadwalKajianUstadz>
      <OtherMenu></OtherMenu>
      <SignOut></SignOut>
    </ScrollView>
  );
};

export default UstadzProfileScreen;
