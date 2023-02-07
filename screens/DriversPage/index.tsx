import React, { memo } from "react";
import {
  TopNavigation,
  StyleService,
  useStyleSheet,
} from "@ui-kitten/components";

import Content from "components/Content";
import Container from "components/Container";
import NavigationAction from "components/NavigationAction";
import { Images } from "assets/images";
import Activity from "./Activity";
import BottomTab from "components/BottomTab";
import useRides from "../../hooks/useRides";

const Activities = memo(() => {
  const styles = useStyleSheet(themedStyles);
  const { rides } = useRides();
  const [dataToday, setDataToday] = React.useState(DATA_TODAY);

  return (
    <Container style={styles.container}>
      <TopNavigation
        style={styles.header}
        title={"Motoristas"}
        accessoryLeft={<NavigationAction icon="undo" status="opacity" />}
      />
      <Content contentContainerStyle={styles.content}>
        <Activity title="Motoristas" data={dataToday} />
      </Content>
      <BottomTab />
    </Container>
  );
});

export default Activities;

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

const DATA_TODAY = [
  {
    id: 0,
    avatar: Images.avatar0,
    name: "Yan Galli",
    amount: 4,
    data: [
      { title: "Telefone", value: "(61) 99901-3066" },
      { title: "Carro", value: "Honda HRV" },
      { title: "Dia da saída", value: "13/01/23" },
      { title: "Horário de saída", value: "12:00" },
      { title: "Local da Saída", value: "Asa Sul" },
      { title: "Sugestão contribuição", value: "50 reais" },
    ],
  },
  {
    id: 1,
    avatar: Images.avatar2,
    name: "Alex Turboe",
    amount: 3,
    data: [
      { title: "Telefone", value: "(61) 99901-3066" },
      { title: "Carro", value: "Honda HRV" },
      { title: "Dia da saída", value: "13/01/23" },
      { title: "Horário de saída", value: "12:00" },
      { title: "Local da Saída", value: "Asa Sul" },
      { title: "Sugestão contribuição", value: "50 reais" },
    ],
  },
  {
    id: 2,
    avatar: Images.avatar3,
    name: "Flex Adameith",
    amount: 2,
    data: [
      { title: "Telefone", value: "(61) 99901-3066" },
      { title: "Carro", value: "Honda HRV" },
      { title: "Dia da saída", value: "13/01/23" },
      { title: "Horário de saída", value: "12:00" },
      { title: "Local da Saída", value: "Asa Sul" },
      { title: "Sugestão contribuição", value: "50 reais" },
    ],
  },
];

