//create plus button react native
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
//import navigation

const AddDakwahBtn = ({}) => {
  const navigation = useNavigation();
  const openDakwahForm = () => {
    //create navigation to dakwah form
    navigation.navigate("PostDakwah");
  };
  return (
    <TouchableOpacity onPress={openDakwahForm}>
      <Ionicons name="ios-add" size={40} color="white" style={{ padding: 5 }} />
    </TouchableOpacity>
  );
};

export default AddDakwahBtn;
