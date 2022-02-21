import React, { useContext, useState, useEffect } from "react";
//import react native
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import { Divider } from "react-native-paper";
import styles from "../style/global";
import Card from "../components/SmallComponents/Card";
import Password from "../components/SmallComponents/Password";
import ChangePasswordForm from "../components/ChangePasswordForm";
const ChangePasswordScreen = () => {
  const MasjidProfile = {
    masjid: "Masjid Dakwah",
    img: "https://t3.ftcdn.net/jpg/02/50/12/70/360_F_250127043_8rncYCl0DJNGwRq9IVL9WrEh7OKKWuXV.jpg",
    name: "Rakhman Gusti Subehi",
  };
  return (
    <View style={styles.screenContainer}>
      <Card title={MasjidProfile.masjid} data={MasjidProfile} />
      <Divider />
      <ChangePasswordForm></ChangePasswordForm>
    </View>
  );
};
export default ChangePasswordScreen;
