import React, { memo, useEffect } from "react";
import { View, FlatList } from "react-native";
import { Layout } from "@ui-kitten/components";
import { useNavigation } from "@react-navigation/native";
import useLayout from "hooks/useLayout";
import Text from "components/Text";
import Container from "components/Container";
import NavigationAction from "components/NavigationAction";
import ItemBook from "./ItemBook";
import { Images } from "assets/images";
import { RefreshControl } from "react-native-web-refresh-control";
import S from "./styles";
import useEvents from "../../hooks/useEvents";

const EventsPage = memo(() => {
  const { navigate } = useNavigation();
  const { top, bottom } = useLayout();
  const { events } = useEvents();

  const renderItem = React.useCallback(({ item }) => {
    return <ItemBook data={item} onPress={() => navigate("HomePage")} />;
  }, []);

  useEffect(() => {
    console.log(events)
  }, [events])

  return (
    <Container style={S.container}>
      <Layout level="2" style={S.topNav}>
        <View style={[S.nav, { paddingTop: top }]}>
          <NavigationAction icon="leftArrow" />
          <NavigationAction icon="search" />
        </View>

        <Text
          category="title2"
          status="white"
          marginLeft={16}
          marginBottom={8}
          children="Eventos"
        />
      </Layout>

      <FlatList
        data={events}
        renderItem={renderItem}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        keyExtractor={(i, _) => i.id.toString()}
        refreshControl={<RefreshControl tintColor="#F0DF67" />}
        contentContainerStyle={[S.content, { paddingBottom: bottom + 24 }]}
        ListHeaderComponent={
          <Text category="title4" status="placeholder" marginBottom={16}>
            {events?.length} Eventos ativos
          </Text>
        }
      />
    </Container>
  );
});

export default EventsPage;

const DATA = [
  {
    id: 0,
    name: "Integração 1",
    startDate: 48,
    endDate: 48,
    book: Images.book5,
  },
  {
    id: 1,
    name: "Consagração Primavera",
    startDate: 48,
    endDate: 48,
    book: Images.book5,
  },
  {
    id: 2,
    name: "The world, your life",
    startDate: 48,
    endDate: 48,
    book: Images.book5,
  },
  {
    id: 3,
    name: "The world, your life",
    startDate: 48,
    endDate: 48,
    book: Images.book5,
  },
];
