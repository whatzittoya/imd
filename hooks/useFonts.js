import * as Font from "expo-font";

export default useFonts = async () =>
  await Font.loadAsync({
    Inter: require("../assets/fonts/Inter-Regular.ttf"),
    Inter_Bold: require("../assets/fonts/Inter-Bold.ttf"),
    Inter_SemiBold: require("../assets/fonts/Inter-SemiBold.ttf"),
    Inter_Medium: require("../assets/fonts/Inter-Medium.ttf"),
  });
