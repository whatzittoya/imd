import { View, Text, StyleSheet } from "react-native";
import { useState } from "react";
// import { Modal, Portal, Text, Button, Provider } from "react-native-paper";
import { Button, Overlay, Icon } from "react-native-elements";

const ModalComponent = ({ visible, setVisible, data, style }) => {
  const toggleOverlay = () => {
    setVisible(!visible);
  };
  return (
    <View>
      <Overlay
        isVisible={visible}
        onBackdropPress={toggleOverlay}
        style={styles.overlay}
      >
        <View style={[styles.content, style]}>
          <Text style={styles.textPrimary}>{data.title}</Text>
          <Button title="Tutup" onPress={toggleOverlay} style={styles.button} />
        </View>
      </Overlay>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    margin: 10,
    fontSize: 12,
  },
  textPrimary: {
    marginVertical: 20,
    textAlign: "center",
    fontSize: 18,
    color: "white",
  },
  textSecondary: {
    marginBottom: 10,
    textAlign: "center",
    fontSize: 17,
    color: "white",
  },
  overlay: {
    margin: 0,
    padding: 10,
  },
  content: { margin: -20, padding: 10, borderRadius: 20, minWidth: 200 },
});

export default ModalComponent;
