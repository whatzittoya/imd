import React, { useContext, useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import SearchBar from "../components/SearchBar";
import DakwahListHorizontal from "../components/DakwahListHorizontal";
import HorizontalList from "../components/HorizontalList";
import Title from "../components/SmallComponents/Title";
import styles from "../style/global";
import { Context as KajianContext } from "../context/KajianContext";
import { Context as UstadzContext } from "../context/UstadzContext";
import { Context as MasjidContext } from "../context/MasjidContext";

import Spinner from "../components/Spinner";
const HomeScreen = () => {
  const results = [
    {
      title: "Dakwah1",
      name: "Ust Abdul Somad",
      image:
        "https://beritamerdeka.net/files/images/20200425-20200425-060733.jpg",
      id: "1",
      date: "2022-02-02 09:00:00",
      thematic: "Thematic1",
      sylabus: "Sylabus1",
      masjid: "Masjid1",
    },
    {
      title: "Dakwah2",
      name: "Ust Adi Hidayat",
      image:
        "https://pbs.twimg.com/profile_images/1185000951255572480/hi_Mh-6A_400x400.jpg",
      id: "2",
      date: "2022-02-04 09:00:00",
      thematic: "Thematic2",
      sylabus: "Sylabus2",
      masjid: "Masjid2",
    },
    {
      title: "Dakwah3",
      name: "Ust Khalid Basalamah",
      image:
        "https://assets.promediateknologi.com/crop/0x0:0x0/x/photo/2022/02/02/3781305451.jpg",
      id: "3",
      date: "2022-02-08 20:00:00",
      thematic: "Thematic3",
      sylabus: "Sylabus3",
      masjid: "Masjid3",
    },
    {
      title: "Dakwah5",
      name: "Ust Unknown",
      image:
        "https://image.shutterstock.com/image-vector/ustadz-female-moslem-religion-teacher-260nw-1438554200.jpg",
      id: "3",
      date: "2022-02-08 20:00:00",
      thematic: "Thematic4",
      sylabus: "Sylabus4",
      masjid: "Masjid4",
    },
    {
      title: "Dakwah6",
      name: "Ust Unknown",
      image:
        "https://image.shutterstock.com/image-vector/ustadz-female-moslem-religion-teacher-260nw-1438554200.jpg",
      id: "3",
      date: "2022-02-08 20:00:00",
      thematic: "Thematic3",
      sylabus: "Sylabus3",
      masjid: "Masjid3",
    },
    {
      title: "Dakwah6",
      name: "Ust Unknown",
      image:
        "https://image.shutterstock.com/image-vector/ustadz-female-moslem-religion-teacher-260nw-1438554200.jpg",
      id: "3",
      date: "2022-02-08 20:00:00",
      thematic: "Thematic3",
      sylabus: "Sylabus3",
      masjid: "Masjid3",
    },
  ];
  //create array result mosque
  const resultsMosque = [
    {
      title: "Mosque1",
      name: "Mosque1",
      image:
        "https://t3.ftcdn.net/jpg/02/50/12/70/360_F_250127043_8rncYCl0DJNGwRq9IVL9WrEh7OKKWuXV.jpg",
    },
    {
      title: "Mosque1",
      name: "Mosque1",
      image:
        "https://img.theculturetrip.com/wp-content/uploads/2017/11/masjid_dian_al-mahri_di_depok_kubah_emas.jpg",
    },
    {
      title: "Mosque1",
      name: "Mosque1",
      image:
        "https://asset.kompas.com/crops/Jnc71A_hCspSRui-CkotnK0Ig6k=/88x0:673x390/750x500/data/photo/2016/10/14/063957520161013-174439780x390.jpg",
    },
    {
      title: "Mosque1",
      name: "Mosque1",
      image:
        "https://akcdn.detik.net.id/visual/2018/03/17/f9571aca-a006-477f-abd4-285dce014661_169.jpeg?w=650",
    },
    {
      title: "Mosque1",
      name: "Mosque1",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbSCGU6TJ8efnRXGVBpxACPhDYViVw3JpUEw&usqp=CAU",
    },
  ];

  const [loading, setLoading] = useState(true);

  const { state, getKajian } = useContext(KajianContext);
  const { state: state_ustadz, getUstadz } = useContext(UstadzContext);
  const { state: state_masjid, getMasjid } = useContext(MasjidContext);
  useEffect(() => {
    setLoading(false);

    setTimeout(() => {
      if (loading) {
        setLoading(false);
        console.log(loading);
      }
    }, 10000);
    //  getKajian();
    //  getUstadz();
    //  getMasjid(() => {
    //    setLoading(false);
    //  });
  }, [loading]);

  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <ScrollView style={styles.screenContainer}>
        <DakwahListHorizontal results={results}></DakwahListHorizontal>
        <Title title={"Ustadz Bergabung Bersama Kami"}></Title>
        <HorizontalList results={results}></HorizontalList>
        <Title title="Masjid Bergabung Bersama Kami"></Title>
        <HorizontalList results={resultsMosque}></HorizontalList>
      </ScrollView>
      {loading && <Spinner></Spinner>}
    </SafeAreaView>
  );
};

export default HomeScreen;
