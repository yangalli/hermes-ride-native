import { StyleService } from "@ui-kitten/components";

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    paddingBottom: 0,
  },
  content: {
    paddingVertical: 36,
    marginHorizontal: 24,
  },
  header: {
    borderBottomColor: "color-basic-1500",
    borderBottomWidth: 1,
  },
});

export default themedStyles;
