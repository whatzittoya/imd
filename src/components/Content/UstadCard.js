import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback, Text } from "react-native";
import { Image } from "react-native-expo-image-cache";
import colors from "../../style/colors";
import fontStyle from "../../style/fontStyle";

function UstadCard({ item, onPress, thumbnailUrl, imageUrl }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          tint="light"
          preview={{ uri: thumbnailUrl }}
          uri={imageUrl}
        />
        <Text
          style={{
            fontFamily: fontStyle.semibold,
            fontSize: 12,
            textAlign: "center",
            color: colors.activetxt,
          }}
        >
          {item.name}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 115,
    height: 100,
    marginBottom: 20,
    backgroundColor: colors.bgCard,
    paddingVertical: 10,
    alignItems: "center",
  },
  image: {
    width: "100%",
    width: 50,
    height: 50,
    borderRadius: 50,
    marginBottom: 5,
  },
});

export default UstadCard;
