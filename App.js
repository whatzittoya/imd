import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import AppLoading from "expo-app-loading";
import { NavigationContainer } from "@react-navigation/native";
import StacksRoute from "./src/navigation";
import { Provider as KajianProvider } from "./src/context/KajianContext";
import { Provider as UstadzProvider } from "./src/context/UstadzContext";
import { Provider as MasjidProvider } from "./src/context/MasjidContext";

import useFonts from "./hooks/useFonts";

// import InputScreen from "./src/screens/InputScreen";

function App() {
  const [isReady, setIsReady] = useState(false);

  const LoadFonts = async () => {
    await useFonts();
  };

  if (!isReady)
    return (
      <AppLoading
        startAsync={LoadFonts}
        onFinish={() => setIsReady(true)}
        onError={console.warn}
      />
    );

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
