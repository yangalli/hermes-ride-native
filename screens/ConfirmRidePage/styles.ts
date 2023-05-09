import { StyleService } from "@ui-kitten/components";

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  topNav: {
    paddingHorizontal: 4,
  },
  dot: {
    alignSelf: "center",
    marginBottom: 20,
  },
  layout: {
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    flex: 1,
    paddingHorizontal: 24,
  },
  input: {
    backgroundColor: "transparent",
  },
  starRate: {
    marginVertical: 16,
  },
  bottom: {
    flexDirection: "row",
    marginHorizontal: 16,
    paddingVertical: 8,
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
  },
  body: {
    marginTop: 16
  },
  card: {
    borderRadius: 12,
    borderColor: "color-basic-1500",
    borderWidth: 1,
    flexDirection: "row",
    height: 56,
    minWidth: 124,
    marginLeft: 16,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 8,
  },
  topLayout: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 24,
    marginBottom: 8,
  },
  qty: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 16,
  },
  addCard: {
    flex: 1,
  },
  buyNow: {
    flex: 1,
    marginLeft: 16,
  },
  content: {
    paddingBottom: 60,
  },
});

export default themedStyles;
