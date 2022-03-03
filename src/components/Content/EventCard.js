import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback, Text } from "react-native";
import { Image } from "react-native-expo-image-cache";
import colors from "../../style/colors";
import fontStyle from "../../style/fontStyle";
import { FontAwesome5 } from "@expo/vector-icons";

function EventCard({ item, onPress, thumbnailUrl, imageUrl }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.imgcontainer}>
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
        <View style={styles.kajiancontainer}>
          <Text
            style={{
              fontFamily: fontStyle.bold,
              fontSize: 12,
              color: colors.activetxt,
              lineHeight: 15,
              fontWeight: "bold",
              letterSpacing: 1.4,
              textTransform: "capitalize",
            }}
          >
            {item.title}
          </Text>

          <Text
            style={{
              fontFamily: fontStyle.secondarytxt,
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: 10,
              lineHeight: 12,
              display: "flex",
              alignItems: "flex-end",
              letterSpacing: 0.1,
              color: colors.secondarytxt,
              textTransform: "capitalize",
            }}
          >
            {item.thematic} - {item.sylabus}
          </Text>

          <Text
            style={{
              fontFamily: fontStyle.secondarytxt,
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: 10,
              lineHeight: 12,
              display: "flex",
              alignItems: "flex-end",
              letterSpacing: 0.1,
              color: colors.secondarytxt,
              textTransform: "capitalize",
            }}
          >
            {item.tipe}
          </Text>

          <View style={{ marginRight: 5, flexDirection: "row" }}>
            <FontAwesome5
              name="map-marked-alt"
              size={10}
              color={colors.secondarytxt}
              style={{ paddingRight: 3 }}
            />
            <Text
              style={{
                fontFamily: fontStyle.secondarytxt,
                fontStyle: "normal",
                fontWeight: "normal",
                fontSize: 10,
                lineHeight: 12,
                display: "flex",
                alignItems: "flex-end",
                letterSpacing: 0.1,
                color: colors.secondarytxt,
                textTransform: "capitalize",
              }}
            >
              {item.masjid}
            </Text>
          </View>

          <View style={styles.infoContainer}>
            <View style={{ marginRight: 5, flexDirection: "row" }}>
              <FontAwesome5
                name="calendar-alt"
                size={10}
                color={colors.noactivetxt}
                style={{ paddingRight: 3 }}
              />
              <Text
                style={{
                  fontFamily: fontStyle.regular,
                  fontStyle: "normal",
                  fontWeight: "normal",
                  fontSize: 8,
                  lineHeight: 10,
                  display: "flex",
                  alignItems: "flex-end",
                  letterSpacing: 0.1,
                  color: colors.secondarytxt,
                }}
              >
                {item.date}
              </Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <FontAwesome5
                name="clock"
                size={10}
                color={colors.noactivetxt}
                style={{ paddingRight: 3 }}
              />
              <Text
                style={{
                  fontFamily: fontStyle.regular,
                  fontStyle: "normal",
                  fontWeight: "normal",
                  fontSize: 8,
                  lineHeight: 10,
                  display: "flex",
                  alignItems: "flex-end",
                  letterSpacing: 0.1,
                  color: colors.secondarytxt,
                }}
              >
                {item.hour}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    backgroundColor: colors.bgCard,
    marginBottom: 20,
    overflow: "hidden",
    height: 100,
    width: 307,
    flexDirection: "row",
    paddingVertical: 10,
  },
  imgcontainer: {
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    flex: 0.3,
  },
  kajiancontainer: {
    justifyContent: "space-between",
    flex: 0.7,
    paddingLeft: 10,
  },
  image: {
    width: "100%",
    width: 50,
    height: 50,
    borderRadius: 50,
    marginBottom: 5,
  },
  infoContainer: {
    marginTop: 2,
    marginRight: 10,
    justifyContent: "flex-end",
    flexDirection: "row",
  },
});

export default EventCard;
