import { StyleSheet } from "react-native";

import { COLORS, SIZES, FONT } from "../constants";

const styles = StyleSheet.create({
  btnContainer: {
    width: 40,
    height: 40,
    flex: 1,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.small / 1.25,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  btnImg: (dimension) => ({
    width: dimension,
    height: dimension,
    borderRadius: SIZES.small / 1.25,
  }),
  btnText: {
    fontFamily: FONT.regular,
    fontSize: SIZES.medium,
    color: COLORS.secondary,
  },
});

export default styles;
