import React, { memo } from "react";
import { View, Image, ImageBackground } from "react-native";
import {
  TopNavigation,
  StyleService,
  useStyleSheet,
  Button,
} from "@ui-kitten/components";
import { useNavigation } from "@react-navigation/native";
import useLayout from "hooks/useLayout";

import Text from "components/Text";
import Content from "components/Content";
import Container from "components/Container";
import NavigationAction from "components/NavigationAction";
import { Images } from "assets/images";

const SuccessOrder = memo(() => {
  const { goBack, navigate } = useNavigation();
  const { height, width } = useLayout();
  const styles = useStyleSheet(themedStyles);

  const SIZE_ELLIPSE = 420 * (width / 375);
  const WIDTH_ORNAMENT = 285.06 * (width / 375);
  const HEIGHT_ORNAMENT = 281.01 * (height / 812);

  return (
    <Container style={styles.container}>
      <Content>
        <View style={styles.title}>
          <Text category="header" center>
            Sucesso!
          </Text>
          <Text category="body" status={"grey500"} center style={styles.subtitle}>
            Você acabou de confirmar sua carona com o Yan Galli! Não esqueça de fazer uma contribuição a ele :)
          </Text>
        </View>
        <ImageBackground
          source={Images.tripleEllipse}
          style={[
            styles.content,
            {
              width: width,
              height: SIZE_ELLIPSE,
            },
          ]}
        >
          <Image
            source={Images.ornament}
            style={{
              width: WIDTH_ORNAMENT,
              height: HEIGHT_ORNAMENT,
            }}
          />
          <Image
            source={Images.success}
            style={{
              position: "absolute",
            }}
          />
        </ImageBackground>
      </Content>
      <View style={styles.bottom}>
        <Button children="Voltar ao início" status={"fill"} size={"48"}  onPress={() => navigate("DriversPage")}/>
        <Button children="Checar minha viagem" style={styles.btnHome} onPress={() => navigate("ProfilePage")}/>
      </View>
    </Container>
  );
});

export default SuccessOrder;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  title: {
    marginTop: 48,
    marginHorizontal: 40,
  },
  subtitle: {
    marginTop: 24,
  },
  content: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: -16,
    zIndex: -10,
  },
  bottom: {
    marginHorizontal: 24,
  },
  btnHome: {
    marginTop: 4,
    marginBottom: 24,
  },
});
