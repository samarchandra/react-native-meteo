import { StyleSheet } from "react-native";
const BACK_BUTTON_WIDTH = 50;
export const s = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  header_text: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginRight: BACK_BUTTON_WIDTH,
  },
  back_button: {
    width: BACK_BUTTON_WIDTH,
  },
  subtitle_text: {
    fontSize: 20,
  },
});
