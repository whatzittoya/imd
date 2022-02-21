//import react native
import { View, FlatList, Text, TouchableOpacity } from "react-native";
//import usestate and useeffect
import styles from "../style/global";
import { List } from "react-native-paper";
import Title from "./SmallComponents/Title";
import { useNavigation } from "@react-navigation/native";

const OtherMenu = ({}) => {
  const navigation = useNavigation();
  const openChangePassword = () => {
    //create navigation to dakwah form
    navigation.navigate("ChangePassword");
  };
  const openDakwahList = () => {
    //create navigation to dakwah form
    navigation.navigate("KajianMasjid", { publiclist: false });
  };
  return (
    <View style={styles.container}>
      <Title title="Laporan"></Title>

      <TouchableOpacity onPress={() => openDakwahList()}>
        <List.Item
          title="List Kajian"
          style={styles.list}
          right={(props) => {
            return (
              <View style={styles.contentSide}>
                <List.Icon {...props} icon="view-list" />
              </View>
            );
          }}
        />
      </TouchableOpacity>

      <Title title="Settings"></Title>

      <TouchableOpacity onPress={() => openChangePassword()}>
        <List.Item
          title="Ganti Password"
          style={styles.list}
          right={(props) => {
            return (
              <View style={styles.contentSide}>
                <List.Icon {...props} icon="lock" />
              </View>
            );
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default OtherMenu;
