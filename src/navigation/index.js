import React, { useEffect, useContext, useState } from "react";
import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screen/HomeScreen";
import AboutScreen from "../screen/AboutScreen";
import JadwalDakwahScreen from "../screen/JadwalDakwahScreen";
import AddDakwahBtn from "../components/SmallComponents/AddDakwahBtn";
import NotificationScreen from "../test/NotificationScreen";
import InputScreen from "../test/InputScreen";
import TodoScreen from "../test/TodoScreen";
import MasjidProfileScreen from "../screen/MasjidProfileScreen";
//import material community icons
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
//import search-bar from react-native-elements
import SearchBar from "../components/SearchBar";
import * as Updates from "expo-updates";
import { createStackNavigator } from "@react-navigation/stack";
import PostDakwahScreen from "../screen/PostDakwahScreen";

import { Context as KajianContext } from "../context/KajianContext";
import { Context as UstadzContext } from "../context/UstadzContext";
import { Context as MasjidContext } from "../context/MasjidContext";
import Spinner from "../components/Spinner";

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
        name="Kajian"
        component={JadwalDakwahScreen}
        options={{
          headerTitle: "Jadwal Dakwah",
          headerStyle: {
            backgroundColor: "#2F80ED",
          },
          headerTitleStyle: {
            fontWeight: "bold",
            color: "#fff",
          },
          tabBarLabel: "Kajian",
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
        name="Profile"
        component={MasjidProfileScreen}
        options={{
          headerStyle: {
            backgroundColor: "#2F80ED",
          },
          headerTitleStyle: {
            fontWeight: "bold",
            color: "#fff",
          },
          tabBarLabel: "Profile",
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
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={MyTabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PostDakwah"
        component={PostDakwahScreen}
        options={{ headerTitle: "Buat Jadwal Dakwah" }}
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
