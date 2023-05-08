import React, { memo } from "react";
import { View } from "react-native";
import {
  TopNavigation,
  StyleService,
  useStyleSheet,
  Layout,
  Button,
  Icon,
  Input,
} from "@ui-kitten/components";
import { useNavigation } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import Text from "components/Text";
import Container from "components/Container";
import NavigationAction from "components/NavigationAction";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import S from "./styles";

const SignInPage = memo(() => {
  const { goBack, navigate } = useNavigation();
  const { bottom } = useSafeAreaInsets();

  return (
    <Container style={[S.container, { paddingBottom: bottom + 8 }]}>
      <TopNavigation
        accessoryLeft={() => <NavigationAction status="primary" />}
        style={{ marginLeft: 12, marginRight: 24 }}
      />

      <KeyboardAwareScrollView
        extraHeight={30}
        enableOnAndroid
        extraScrollHeight={30}
        showsVerticalScrollIndicator={false}
      >
        <Text marginTop={24} center category="title2">
          Faça o seu Login
        </Text>

        <Button
          activeOpacity={0.55}
          style={S.facebook}
          status="success"
          children="Eu já tenho uma conta"
          accessoryLeft={() => {
            return <Icon pack="assets" name="facebook" style={S.icon} />;
          }}
        />
        <Button
          activeOpacity={0.55}
          style={S.btnGG}
          children="Criar uma conta"
          onPress={() => navigate("CreateDriverPage")}
          accessoryLeft={() => {
            return (
              <Icon
                animation="pulse"
                pack="assets"
                name="gg"
                style={S.icon}
              />
            );
          }}
        />
        <View style={S.middleView}>
          <Layout style={S.line} level="2" />
          <Text
            center
            category="body"
            status="placeholder"
            marginVertical={48}
            marginHorizontal={16}
          >
            Entrar com Email
          </Text>
          <Layout style={S.line} level="2" />
        </View>

        <Input
          style={S.input}
          status="primary"
          placeholder="Email"
          accessoryLeft={(props) => (
            <Icon {...props} pack="assets" name={"user"} />
          )}
        />

        <Input
          style={S.signIn}
          status="primary"
          placeholder="Senha"
          accessoryLeft={(props) => (
            <Icon {...props} pack="assets" name={"user"} />
          )}
        />
        <Button children="Entrar" style={S.signIn} />
      </KeyboardAwareScrollView>
    </Container>
  );
});

export default SignInPage;
