import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from "../../style/colors";
import fontStyle from "../../style/fontStyle";
import Title from "../SmallComponents/Title";
import EventCard from "./EventCard";
import DakwahList from "../DakwahListHorizontal";

function TitleContent({ title, results, ItemComponent = EventCard, onPress }) {
  return (
    <>
      <View style={styles.titlecontent}>
        <View style={styles.headcontent}>
          <Title title={title} />
          <TouchableOpacity style={styles.btndetail} onPress={onPress}>
            <Text style={styles.btntext}>Lihat Detail</Text>
          </TouchableOpacity>
        </View>
        <View>
          <DakwahList results={results} ItemComponent={ItemComponent} />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  titlecontent: { padding: 10 },
  headcontent: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  btndetail: {
    flexDirection: "row",
    marginVertical: 2,
    backgroundColor: colors.bgCard,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  btntext: {
    fontSize: 8,
    fontFamily: fontStyle.regular,
    color: colors.primary,
  },
});

export default TitleContent;
