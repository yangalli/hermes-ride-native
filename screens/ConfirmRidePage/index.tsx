import React, { memo, useEffect } from "react";
import { View } from "react-native";
import {
  TopNavigation,
  StyleService,
  useStyleSheet,
  Layout,
  Button,
  Icon,
  Input,
  useTheme,
} from "@ui-kitten/components";
import useLayout from "hooks/useLayout";
import Container from "components/Container";
import Text from "components/Text";
import NavigationAction from "components/NavigationAction";
import { RefreshControl } from "react-native-web-refresh-control";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useRoute, useNavigation } from "@react-navigation/native";

const ConfirmRidePage = memo(() => {
  const route = useRoute();
  const theme = useTheme();
  const { goBack, navigate } = useNavigation();
  const { height, width, top, bottom } = useLayout();
  const styles = useStyleSheet(themedStyles);
  const [value, setValue] = React.useState<number>(3);

  function formatCellphone(cellphone: string) {
    const ddd = cellphone.slice(0, 2);
    const phoneFirstHalf = cellphone.slice(2, 7)
    const phoneSecondHalf = cellphone.slice(7, 11)

    return `(${ddd}) ${phoneFirstHalf}-${phoneSecondHalf}`;
  }

  return (
    <Container style={styles.container} level="2">
      <Layout
        level="1"
        style={{
          position: "absolute",
          height: height / 2,
          top: 0,
          width: width,
        }}
      />
      <TopNavigation
        appearance="control"
        accessoryLeft={<NavigationAction icon="leftArrow" />}
        style={styles.topNav}
      />
      <KeyboardAwareScrollView
        enableOnAndroid
        extraScrollHeight={-bottom + 20}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
        refreshControl={<RefreshControl tintColor="#F0DF67" />}
      >
        <View
          style={{
            height: height / 1.9,
            backgroundColor: theme["background-basic-color-1"],
          }}
        >
          <Layout style={styles.layout} level={"2"}>
            <View style={styles.topLayout}>
              <Text category="title2" status="white">
                {route?.params?.driver?.name}
              </Text>
              {/* TODO: Add favorites */}
              {/* <Button
                status="transparent"
                accessoryRight={<Icon pack="assets" name="heart" />}
              /> */}
            </View>

            <Text children={formatCellphone(route?.params?.driver?.cellphone)} status="primary" category="title4" />

            <Text
              style={styles.body}
              status="snow"
              category="body"
              children="Detalhes da viagem:"
            />

            <View style={styles.qty}>
              <Text children="Vagas" uppercase status="white" category="title4" />
              <View style={styles.card}>
                <Button
                  status="transparent"
                  children="-"
                  size="tiny"
                  disabled={value === 0}
                  onPress={() => setValue(value - 1)}
                />
                <Input
                  onChangeText={(nextValue) => {
                    let x = parseInt(nextValue);
                    return setValue(x);
                  }}
                  value={value >= 0 ? `${value}` : "0"}
                  status="disableFill"
                  keyboardType="numeric"
                />
                <Button
                  status="transparent"
                  children="+"
                  size="tiny"
                  onPress={() => setValue(value + 1)}
                />
              </View>
            </View>
          </Layout>
        </View>
      </KeyboardAwareScrollView>
      <View style={[styles.bottom, { paddingBottom: bottom + 8 }]}>
        <Button
          children="Cancelar"
          status="disable"
          style={styles.addCard}
          onPress={goBack}
        />
        <Button children="Confirmar" style={styles.buyNow} onPress={() => navigate("RideSuccessPage")} />
      </View>
    </Container>
  );
});

export default ConfirmRidePage;

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
