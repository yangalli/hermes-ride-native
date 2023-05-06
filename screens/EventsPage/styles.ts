import { StyleService } from "@ui-kitten/components";
import { Images } from "assets/images";

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    paddingTop: 0,
    paddingBottom: 0,
  },
  nav: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 4,
  },
  topNav: {
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  content: {
    paddingHorizontal: 16,
    marginTop: 16,
  },
});

export default themedStyles;
