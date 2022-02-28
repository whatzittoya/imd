import React, { useEffect, useContext, useState } from "react";
import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screen/HomeScreen";
import AboutScreen from "../screen/AboutScreen";
import JadwalDakwahScreen from "../screen/JadwalDakwahScreen";
import KajianUstadzScreen from "../screen/KajianUstadzScreen";
import SubmitRequestScreen from "../screen/SubmitRequestScreen";
import AddDakwahBtn from "../components/SmallComponents/AddDakwahBtn";
import NotificationScreen from "../test/NotificationScreen";
import InputScreen from "../test/InputScreen";
import TodoScreen from "../test/TodoScreen";
import MasjidProfileScreen from "../screen/MasjidProfileScreen";
import UstadzRequestScreen from "../screen/UstadzRequestScreen";
import ChangePasswordScreen from "../screen/ChangePasswordScreen";
import UstadzProfileScreen from "../screen/UstadzProfileScreen";
//import material community icons
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
//import search-bar from react-native-elements
import SearchBar from "../components/SearchBar";
import * as Updates from "expo-updates";
import { createStackNavigator } from "@react-navigation/stack";
import PostDakwahScreen from "../screen/PostDakwahScreen";

// import { Context as KajianContext } from "../context/KajianContext";
// import { Context as UstadzContext } from "../context/UstadzContext";
// import { Context as MasjidContext } from "../context/MasjidContext";
// import Spinner from "../components/Spinner";

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: () => <SearchBar></SearchBar>,
          headerStyle: {
            backgroundColor: "#2F80ED",
            height: 120,
          },

          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="KajianMasjid"
        component={JadwalDakwahScreen}
        options={{
          headerTitle: "Jadwal Kajian",
          headerStyle: {
            backgroundColor: "#2F80ED",
          },
          headerTitleStyle: {
            fontWeight: "bold",
            color: "#fff",
          },
          tabBarLabel: "Kajian Masjid",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="calendar-text-outline"
              color={color}
              size={size}
            />
          ),
          headerRight: () => <AddDakwahBtn></AddDakwahBtn>,
        }}
      />
      <Tab.Screen
        name="KajianUstadz"
        component={KajianUstadzScreen}
        options={{
          headerTitle: "Kajian",
          headerStyle: {
            backgroundColor: "#2F80ED",
          },
          headerTitleStyle: {
            fontWeight: "bold",
            color: "#fff",
          },
          tabBarLabel: "Kajian Ustadz",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="calendar-text-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileMasjiid"
        component={MasjidProfileScreen}
        options={{
          headerStyle: {
            backgroundColor: "#2F80ED",
          },
          headerTitleStyle: {
            fontWeight: "bold",
            color: "#fff",
          },
          tabBarLabel: "Profile Masjid",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileUstadz"
        component={UstadzProfileScreen}
        options={{
          headerStyle: {
            backgroundColor: "#2F80ED",
          },
          headerTitleStyle: {
            fontWeight: "bold",
            color: "#fff",
          },
          tabBarLabel: "Profile Ustadz",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const StacksRoute = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    checkUpdates();
  }, []);

  return (
    <Stack.Navigator initialRouteName="HomeTab">
      <Stack.Screen
        name="HomeTab"
        component={MyTabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PostDakwah"
        component={PostDakwahScreen}
        options={{ headerTitle: "Buat Jadwal Dakwah" }}
      />
      <Stack.Screen
        name="UstadzRequest"
        component={UstadzRequestScreen}
        options={{ headerTitle: "Permintaan Ustadz" }}
      />
      <Stack.Screen
        name="ChangePassword"
        component={ChangePasswordScreen}
        options={{ headerTitle: "Update Password" }}
      />
      <Stack.Screen
        name="SubmitRequest"
        component={SubmitRequestScreen}
        options={{ headerTitle: "Pengajuan Pendakwah" }}
      />
    </Stack.Navigator>
  );
};
export default StacksRoute;

async function checkUpdates() {
  try {
    const update = await Updates.checkForUpdateAsync();
    if (update.isAvailable) {
      await Updates.fetchUpdateAsync();
      // ... notify user of update ...
      Updates.reloadAsync();
    }
  } catch (e) {
    // handle or log error
  }
}
