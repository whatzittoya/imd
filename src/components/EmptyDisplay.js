import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  FlatList,
} from "react-native";

const emptyDisplay = ({ refresh }) => {
  return (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyText}>Data kosong</Text>
      <Button
        onPress={() => {
          refresh();
        }}
        title="Muat Ulang"
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  emptyContainer: {
    flex: 1,
    paddingTop: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  emptyText: {
    fontSize: 20,
  },
});

export default emptyDisplay;
