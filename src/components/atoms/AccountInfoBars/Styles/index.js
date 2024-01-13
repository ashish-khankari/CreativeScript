import EStyleSheet from "react-native-extended-stylesheet";

const styles = EStyleSheet.create({
  container: {
    flexDirection: "row",
    width: 350,
    height: 60,
    borderWidth: 1,
    borderColor: "grey",
    alignItems: "center",
    borderRadius: 12,
    margin: 20,
  },
  leftSideIcon: {
    height: 30,
    width: 30,
    marginLeft: 20,
  },
  rightSideIcon: {
    height: 30,
    width: 30,
    position: "absolute",
    right: 15,
  },
  title: {
    left: 20,
  },
});

export default styles;
