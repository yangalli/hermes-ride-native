import React, { memo, useEffect } from "react";
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

  return (
    <Container style={styles.container}>
      <TopNavigation
        style={styles.header}
        title={"Motoristas"}
        accessoryLeft={<NavigationAction icon="undo" status="opacity" />}
      />
      <Content contentContainerStyle={styles.content}>
        <Activity title="Motoristas" data={rides} />
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

