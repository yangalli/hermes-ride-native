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
  const [dataToday, setDataToday] = React.useState(DATA_TODAY);

  useEffect(() => {
    console.log(rides);
  }, [rides])

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

const DATA_TODAY = [
  {
    id: 0,
    avatar: Images.avatar0,
    carSpaces: 4,
    cellphone: "(61) 99901-3066",
    departureDay: "13/01/23",
    departureTime: "12:00",
    departurePlace: "Asa Sul",
    contributionSuggestion: "50 reais",
    driver: {
      name: "Yan Galli",
      cars: [
        {
          name: "Honda HRV",
        }
      ]
    }
  },
  {
    id: 1,
    avatar: Images.avatar2,
    carSpaces: 3,
    cellphone: "(61) 99901-3066",
    departureDay: "13/01/23",
    departureTime: "12:00",
    departurePlace: "Asa Sul",
    contributionSuggestion: "50 reais",
    driver: {
      name: "Alex Turboe",
      cars: [
        {
          name: "Honda HRV",
        }
      ]
    }
  },
  {
    id: 2,
    avatar: Images.avatar3,
    carSpaces: 2,
    cellphone: "(61) 99901-3066",
    departureDay: "13/01/23",
    departureTime: "12:00",
    departurePlace: "Asa Sul",
    contributionSuggestion: "50 reais",
    driver: {
      name: "Alex Turboe",
      cars: [
        {
          name: "Honda HRV",
        }
      ]
    }
  },
];

