import { StyleService } from "@ui-kitten/components";

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  bottom: {
    position: "absolute",
    bottom: 8,
    width: "100%",
  },
  input: {
    paddingHorizontal: 32,
  },
  image: {
    width: 48,
    height: 48,
  },
  tabBar: {
    marginHorizontal: 80,
  },
  line: {
    height: 1,
    flex: 1,
  },
  facebook: {
    backgroundColor: "#00433A",
    marginHorizontal: 32,
    justifyContent: "flex-start",
    marginTop: 40,
    marginBottom: 24,
  },
  icon: {
    tintColor: "color-basic-100",
    marginRight: 32,
    marginLeft: 16,
  },
  btnGG: {
    marginHorizontal: 32,
    justifyContent: "flex-start",
  },
  middleView: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  signIn: {
    marginHorizontal: 32,
    marginTop: 24,
  },
});

export default themedStyles;
