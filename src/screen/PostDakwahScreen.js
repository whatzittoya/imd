//create dakwah form react native
import React, { useState, useEffect } from "react";
//import react native
import { View, ScrollView } from "react-native";
import Card from "../components/SmallComponents/Card";

import DakwahForm from "../components/DakwahForm";

const PostDakwahScreen = () => {
  return (
    <ScrollView>
      <DakwahForm />
    </ScrollView>
  );
};

export default PostDakwahScreen;
