import React, { memo, useEffect } from "react";
import {
  TopNavigation,
  StyleService,
  useStyleSheet,
} from "@ui-kitten/components";

import Content from "components/Content";
import Container from "components/Container";
import NavigationAction from "components/NavigationAction";
import Activity from "./Activity";
import BottomTab from "components/BottomTab";
import useRides from "../../hooks/useRides";
import S from "./styles";

const DriversPage = memo(() => {
  const { rides } = useRides();

  return (
    <Container style={S.container}>
      <TopNavigation
        style={S.header}
        title={"Motoristas"}
        accessoryLeft={<NavigationAction icon="undo" status="opacity" />}
      />
      <Content contentContainerStyle={S.content}>
        <Activity title="Motoristas" data={rides} />
      </Content>

      <BottomTab />
    </Container>
  );
});

export default DriversPage;

