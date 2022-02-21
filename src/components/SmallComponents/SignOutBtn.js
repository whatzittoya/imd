import { Button } from "react-native-paper";
import { View } from "react-native";
import styles from "../../style/global";

const SignOut = (props) => {
  const { title, data } = props;
  return (
    <View style={styles.container}>
      <Button
        icon="logout"
        mode="contained"
        color="#F44B50"
        onPress={() => console.log("Pressed")}
      >
        Log Out
      </Button>
    </View>
  );
};
export default SignOut;
