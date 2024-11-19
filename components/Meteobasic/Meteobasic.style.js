import { StyleSheet } from "react-native";
import codegenNativeCommands from "react-native/Libraries/Utilities/codegenNativeCommands";

export const s = StyleSheet.create({
  clock: {
    alignItems: "flex-end",
  },
  city: {},
  interpretation: {
    alignSelf: "flex-end",
    transform: [{ rotate: "-90deg" }],
  },
  interpretation_text: { fontSize: 20 },
  temprature_box: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
  },
  temprature: {
    fontSize: 150,
  },
  temp_image: { height: 120, width: 120 },
});
