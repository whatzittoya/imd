//import react native
import {
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import { Button, Divider, Text, TextInput } from "react-native-paper";
//import usestate and useeffect
import { useState, useEffect } from "react";
import styles from "../style/global";
import CardDisplay from "./SmallComponents/Card";

const data = { name: "250.000", img: "123" };
const RequestForm = () => {
  const [kafarah, setKafarah] = useState(250000);
  return (
    <View style={styles.container}>
      <CardDisplay title="Standard Kafarah Ustadz" data={data}></CardDisplay>
      <TextInput
        label="Silahkan diubah"
        value={kafarah}
        onChangeText={(text) => setKafarah(text)}
        mode="outlined"
        style={styles.input}
      />
      <View style={{ paddingTop: 10 }}>
        <Button icon="check" mode="contained">
          Kirim
        </Button>
      </View>
    </View>
  );
};
export default RequestForm;
