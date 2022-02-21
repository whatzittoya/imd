import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import StacksRoute from "./src/navigation";
import { Provider as KajianProvider } from "./src/context/KajianContext";
import { Provider as UstadzProvider } from "./src/context/UstadzContext";
import { Provider as MasjidProvider } from "./src/context/MasjidContext";

// import InputScreen from "./src/screens/InputScreen";

function App() {
  return (
    <UstadzProvider>
      <MasjidProvider>
        <KajianProvider>
          <NavigationContainer>
            <StacksRoute></StacksRoute>
          </NavigationContainer>
        </KajianProvider>
      </MasjidProvider>
    </UstadzProvider>
  );
}
export default App;
