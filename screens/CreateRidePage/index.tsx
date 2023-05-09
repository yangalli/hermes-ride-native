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
import useRides from "../../hooks/useRides";

const CreateRidePage = memo(() => {
  const { navigate } = useNavigation();
  const { width } = useLayout();
  const [index, setIndex] = React.useState<number>(2);
  const { control, handleSubmit } = useForm({
    defaultValues: {
      carSpaces: 1,
      departureDay: '',
      departurePlace: '',
      departureTime: '',
      contributionSuggestion: 20,
      driverId: 1,
      userId: 1,
      eventId: 1,
    }
  });
  const { createRide } = useRides();
  const onSubmit = (data: any) => console.log(data);

  function handleSave(data: any) {
    createRide(
      data.carSpaces,
      data.departureDay,
      data.departurePlace,
      data.departureTime,
      data.contributionSuggestion,
      1,
      3,
      2
    );
    navigate("ProfilePage");
  }

  const Tab1 = React.useCallback(() => {
    return (
      <KeyboardAwareScrollView style={S.content} enableOnAndroid showsVerticalScrollIndicator={false}>
        <Text category="title3" center marginBottom={32}>
          Crie a sua viagem :)
        </Text>

        <InputText name="carSpaces" control={control} placeholder="Espaços no carro" />

        <InputText name="departureDay" control={control} style={S.inputPhone} placeholder="Dia da saída" />

        <InputText name="departurePlace" control={control} placeholder="Local da Saída" />

        <InputText name="departureTime" control={control} style={S.inputPhone} placeholder="Horário da saída" />

        <InputText name="contributionSuggestion" control={control} placeholder="Sugestão de contribuição" />

        <Button
          children="Próximo passo"
          style={S.button}
          onPress={handleSubmit(handleSave)}
        />
      </KeyboardAwareScrollView>
    );
  }, [index]);

  const renderScene = SceneMap({
    first: Tab1,
    second: Tab1,
    third: Tab1,
  });
  const [routes] = React.useState([
    { key: "first", title: "" },
    { key: "second", title: "" },
    { key: "third", title: "" },
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

export default CreateRidePage;
