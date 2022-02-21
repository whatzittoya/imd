import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button, Divider } from "react-native-paper";
import DakwahList from "../components/DakwahList";
import styles from "../style/global";

export default function JadwalKajian({ route }) {
  let publiclist = true;
  try {
    publiclist = route.params.publiclist;
  } catch (error) {
    publiclist = true;
  }

  const kajian = [
    {
      title: "Dakwah1",
      name: "Ust Abdul Somad",
      image:
        "https://img.theculturetrip.com/wp-content/uploads/2017/11/masjid_dian_al-mahri_di_depok_kubah_emas.jpg",
      id: "1",
      date: "2022-02-02 09:00:00",
      thematic: "Thematic1",
      sylabus: "Sylabus1",
      masjid: "Masjid1",
      status: "0",
      statusText: "Belum ada ustadz",
    },
    {
      title: "Dakwah2",
      name: "Ust Adi Hidayat",
      image:
        "https://img.theculturetrip.com/wp-content/uploads/2017/11/masjid_dian_al-mahri_di_depok_kubah_emas.jpg",
      id: "2",
      date: "2022-02-04 09:00:00",
      thematic: "Thematic2",
      sylabus: "Sylabus2",
      masjid: "Masjid2",
      status: "1",
      statusText: "Sudah ada ustadz",
    },
    {
      title: "Dakwah3",
      name: "Ust Khalid Basalamah",
      image:
        "https://akcdn.detik.net.id/visual/2018/03/17/f9571aca-a006-477f-abd4-285dce014661_169.jpeg?w=650",
      id: "3",
      date: "2022-02-08 20:00:00",
      thematic: "Thematic3",
      sylabus: "Sylabus3",
      masjid: "Masjid3",
      status: "1",
      statusText: "Selesai",
    },
    {
      title: "Dakwah5",
      name: "Ust Unknown",
      image:
        "https://akcdn.detik.net.id/visual/2018/03/17/f9571aca-a006-477f-abd4-285dce014661_169.jpeg?w=650",
      id: "4",
      date: "2022-02-08 20:00:00",
      thematic: "Thematic4",
      sylabus: "Sylabus4",
      masjid: "Masjid4",
      status: "0",
      statusText: "Batal",
    },
    {
      title: "Dakwah6",
      name: "Ust Unknown",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbSCGU6TJ8efnRXGVBpxACPhDYViVw3JpUEw&usqp=CAU",
      id: "5",
      date: "2022-02-08 20:00:00",
      thematic: "Thematic3",
      sylabus: "Sylabus3",
      masjid: "Masjid3",
      status: "0",
      statusText: "Selesai",
    },
  ];

  const [activebtn, setActivebtn] = useState(1);
  const [filteredResults, setFilteredResults] = useState(
    kajian.filter((item) => item.status === "1")
  );
  const changeView = (val, actvbtn) => {
    setFilteredResults(kajian.filter((item) => item.status === val));
    setActivebtn(actvbtn);
  };
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", marginBottom: 10 }}>
        <Button
          mode="contained"
          compact={true}
          color="#F2F2F2"
          onPress={() => changeView("1", 1)}
        >
          <Text
            style={
              activebtn == 1
                ? stylesLocal.txtBtnSelected
                : stylesLocal.txtBtnDefault
            }
          >
            Sudah Ada Ustadz
          </Text>
        </Button>
        <Button
          mode="contained"
          compact={true}
          color="#F2F2F2"
          style={{ marginLeft: "auto" }}
          onPress={() => changeView("0", 2)}
        >
          <Text
            style={
              activebtn == 2
                ? stylesLocal.txtBtnSelected
                : stylesLocal.txtBtnDefault
            }
          >
            Belum Ada Ustadz
          </Text>
        </Button>
      </View>
      <Divider />
      <DakwahList
        results={filteredResults}
        public={true}
        withStatus={true}
      ></DakwahList>
    </View>
  );
}

const stylesLocal = StyleSheet.create({
  txtBtnDefault: {
    fontSize: 12,
    color: "black",
  },
  txtBtnSelected: {
    fontSize: 12,
    color: "#219653",
  },
});
