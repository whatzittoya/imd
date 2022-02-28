import * as Font from "expo-font";

export default useFonts = async () =>
  await Font.loadAsync({
    Inter: require("../assets/fonts/Inter_Regular.otf"),
  });
