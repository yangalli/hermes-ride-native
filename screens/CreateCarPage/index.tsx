import React, { memo } from "react";
import { Button, Input, TopNavigation } from "@ui-kitten/components";
import { useNavigation } from "@react-navigation/native";
import Text from "components/Text";
import InputText from "components/InputText";
import Container from "components/Container";
import AnimatedStep from "components/AnimatedStep";
import NavigationAction from "components/NavigationAction";
import { SceneMap, TabView } from "react-native-tab-view";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import useLayout from "hooks/useLayout";
import { useForm } from "react-hook-form";
import S from "./styles";
import useCars from "../../hooks/useCars";

const CreateCarPage = memo(() => {
  const { navigate } = useNavigation();
  const { width } = useLayout();
  const [index, setIndex] = React.useState<number>(1);
  const { control, handleSubmit } = useForm({
    defaultValues: {
      name: '',
      plate: '',
      spaces: 4,
      driverId: 1
    }
  });
  const { createCar } = useCars();

  function handleSave(data: any) {
    // createCar(data.name, data.plate, data.spaces, 1);
    navigate("CreateRidePage");
  }

  const Tab1 = React.useCallback(() => {
    return (
      <KeyboardAwareScrollView style={S.content} enableOnAndroid showsVerticalScrollIndicator={false}>
        <Text category="title3" center marginBottom={32}>
          Agora o seu carro :)
        </Text>

        <InputText name="name" placeholder="Modelo - ex: Honda Fit" control={control} />

        <InputText name="plate" style={S.inputPhone} placeholder="Placa" control={control} />

        <InputText name="spaces" placeholder="Total de espaços no carro" control={control} />

        <Button
          children="Próximo passo"
          style={S.button}
          onPress={handleSubmit(handleSave)}
        />
      </KeyboardAwareScrollView>
    );
  }, [index]);

  const Tab2 = React.useCallback(() => {
    return (
      <KeyboardAwareScrollView style={S.content} enableOnAndroid showsVerticalScrollIndicator={false}>
        <Text category="title3" center marginBottom={32}>
          Dados do seu carro
        </Text>

        <Input placeholder="Modelo" />

        <Input style={S.inputPhone} placeholder="Placa" />

        <Input placeholder="Total de espaços" />

        <Button
          children="Fazer cadastro"
          style={S.button}
          onPress={handleSubmit(handleSave)}
        />
      </KeyboardAwareScrollView>
    );
  }, [index]);

  const renderScene = SceneMap({
    first: Tab1,
    second: Tab2,
  });
  const [routes] = React.useState([
    { key: "first", title: "" },
    { key: "second", title: "" },
  ]);

  return (
    <Container useSafeArea>
      <TopNavigation
        style={S.topNav}
        accessoryLeft={() => {
          return <NavigationAction icon={"cancel"} status="primary" />;
        }}
      />

      <AnimatedStep style={S.animatedStep} step={index} />

      <Text
        category="call-out"
        center
        marginTop={39}
        status="placeholder"
        marginBottom={8}
      >
        Passo 0{index + 1}.
      </Text>

      <TabView
        showPageIndicator
        lazy
        lazyPreloadDistance={2000}
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width }}
        style={S.container}
        transitionStyle="scroll"
        renderTabBar={() => null}
      />
    </Container>
  );
});

export default CreateCarPage;
