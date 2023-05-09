import React, { memo } from "react";
import { View } from "react-native";
import {
  TopNavigation,
  Layout,
  Button,
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
import S from "./styles";

const ConfirmRidePage = memo(() => {
  const route = useRoute();
  const theme = useTheme();
  const { goBack, navigate } = useNavigation();
  const { height, width, bottom } = useLayout();
  const [value, setValue] = React.useState<number>(3);

  function formatCellphone(cellphone: string) {
    const ddd = cellphone.slice(0, 2);
    const phoneFirstHalf = cellphone.slice(2, 7)
    const phoneSecondHalf = cellphone.slice(7, 11)

    return `(${ddd}) ${phoneFirstHalf}-${phoneSecondHalf}`;
  }

  return (
    <Container style={S.container} level="2">
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
        style={S.topNav}
      />
      <KeyboardAwareScrollView
        enableOnAndroid
        extraScrollHeight={-bottom + 20}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={S.content}
        refreshControl={<RefreshControl tintColor="#F0DF67" />}
      >
        <View
          style={{
            height: height / 1.9,
            backgroundColor: theme["background-basic-color-1"],
          }}
        >
          <Layout style={S.layout} level={"2"}>
            <View style={S.topLayout}>
              <Text category="title2" status="white">
                {route?.params?.user?.name}
              </Text>
              {/* TODO: Add favorites */}
              {/* <Button
                status="transparent"
                accessoryRight={<Icon pack="assets" name="heart" />}
              /> */}
            </View>

            <Text children={formatCellphone(route?.params?.user?.cellphone)} status="primary" category="title4" />

            <Text
              style={S.body}
              status="snow"
              category="body"
              children="Detalhes da viagem:"
            />

            <View style={S.qty}>
              <Text children="Vagas" uppercase status="white" category="title4" />
              <View style={S.card}>
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
      <View style={[S.bottom, { paddingBottom: bottom + 8 }]}>
        <Button
          children="Cancelar"
          status="disable"
          style={S.addCard}
          onPress={goBack}
        />
        <Button children="Confirmar" style={S.buyNow} onPress={() => navigate("RideSuccessPage")} />
      </View>
    </Container>
  );
});

export default ConfirmRidePage;
