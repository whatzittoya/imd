import { Platform } from "react-native";
import colors from "./colors";
export default {
  colors,
  text: {
    color: colors.activetxt,
    fontSize: 12,
    fontFamily: Platform.OS === "android" ? "Inter" : "Avenir",
    fontWeight: "normal",
    lineHeight: 15,
    letterSpacing: 0.3,
  },
};
