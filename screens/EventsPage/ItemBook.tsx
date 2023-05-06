import React, { useEffect } from "react";
import {
  View,
  TouchableOpacity,
  Image,
  ImageSourcePropType,
} from "react-native";
import {
  StyleService,
  useStyleSheet,
  Layout,
  Icon,
  useTheme,
} from "@ui-kitten/components";
import { Images } from "assets/images";
import Text from "components/Text";

interface Props {
  id: number;
  name: string;
  startDate: any;
  endDate: any;
  book: ImageSourcePropType;
};

interface ItemProps {
  data: Props;
  onPress?(): void;
};

const ItemBook = ({ data, onPress }: ItemProps) => {
  const styles = useStyleSheet(themedStyles);
  const [bookMark, setBookMark] = React.useState(false);
  const theme = useTheme();

  function formatDate(unformattedDate: any) {
    const dateArray = data.startDate.split(" ");

    return dateArray[0];
  }

  useEffect(() => {
    console.log(data.startDate)
    const date = new Date(data.startDate);
    console.log(data.startDate.split(" "))
  }, [data])

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <Layout level="2" style={[styles.container]}>
        <Image
          source={Images.book5}
          /* @ts-ignore */
          style={styles.book}
        />
        <View style={styles.content}>
          <Text
            children={data.name}
            status="white"
            category="title4"
            marginBottom={4}
          />

          <Text children="Pedro Paiva" status="grey500" category="subhead" />

          <View style={styles.time}>
            <View style={styles.headPhone}>
              <Icon pack="assets" name="calendar" style={styles.icon} />
              <Text category="subhead" status="white" marginLeft={8}>
                {formatDate(data?.startDate)} a {formatDate(data?.endDate)}
              </Text>
            </View>
          </View>
        </View>
      </Layout>
    </TouchableOpacity>
  );
};

export default ItemBook;

const themedStyles = StyleService.create({
  container: {
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
    borderColor: "color-basic-1500",
    paddingVertical: 16,
    paddingLeft: 16,
    paddingRight: 24,
  },
  content: {
    flex: 1,
  },
  icon: {
    width: 20,
    height: 20,
    tintColor: "text-primary-color",
  },
  clock: {
    width: 48,
    height: 48,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
    marginLeft: 10,
    marginRight: 16,
  },
  time: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 16,
  },
  book: {
    width: 64,
    marginRight: 24,
    height: 86,
  },
  headPhone: {
    flexDirection: "row",
  },
});
