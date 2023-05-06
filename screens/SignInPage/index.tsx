import React, { memo } from "react";
import { View, Image, TouchableOpacity } from "react-native";
import {
  TopNavigation,
  useTheme,
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
import { Images } from "assets/images";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const SignInPage = memo(() => {
  const { goBack, navigate } = useNavigation();
  const { bottom } = useSafeAreaInsets();
  const styles = useStyleSheet(themedStyles);

  return (
    <Container style={[styles.container, { paddingBottom: bottom + 8 }]}>
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
          style={styles.facebook}
          status="success"
          children="Eu já tenho uma conta"
          accessoryLeft={() => {
            return <Icon pack="assets" name="facebook" style={styles.icon} />;
          }}
        />
        <Button
          activeOpacity={0.55}
          style={styles.btnGG}
          status="success"
          children="Fazer uma conta"
          onPress={() => navigate("CreateDriverPage")}
          accessoryLeft={() => {
            return (
              <Icon
                animation="pulse"
                pack="assets"
                name="gg"
                style={styles.icon}
              />
            );
          }}
        />
        <View style={styles.middleView}>
          <Layout style={styles.line} level="2" />
          <Text
            center
            category="body"
            status="placeholder"
            marginVertical={48}
            marginHorizontal={16}
          >
            Entrar com Email
          </Text>
          <Layout style={styles.line} level="2" />
        </View>

        <Input
          style={styles.input}
          status="primary"
          placeholder="Email/Phonenumber"
          accessoryLeft={(props) => (
            <Icon {...props} pack="assets" name={"user"} />
          )}
        />
        <Button children="Sign In" style={styles.signIn} />
      </KeyboardAwareScrollView>
      <View style={styles.bottom}>
        <Text children="SIGN IN" status="primary" center onPress={goBack} />
      </View>
    </Container>
  );
});

export default SignInPage;

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
    backgroundColor: "#6979F8",
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
    backgroundColor: "#FF647C",
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
