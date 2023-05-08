import React, { memo } from "react";
import { View, Image } from "react-native";
import {
  TopNavigation,
  StyleService,
  useStyleSheet,
  Avatar,
  ViewPager,
  Button,
  Icon
} from "@ui-kitten/components";
import useLayout from "hooks/useLayout";

import Container from "components/Container";
import NavigationAction from "components/NavigationAction";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import { Images } from "assets/images";
import HeaderTeacher from "./HeaderProfile";
import FrequencyTab from "./FrequencyTab";
import TabCourse from "./TabCourse";
import BottomTab from "components/BottomTab";

const ProfilePage = memo(() => {
  const { height, top, bottom } = useLayout();
  const styles = useStyleSheet(themedStyles);

  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const translationY = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler((event) => {
    translationY.value = event.contentOffset.y;
  });

  const [header, setHeader] = React.useState(0);
  const onLayoutHeader = React.useCallback(
    (e) => setHeader(e.nativeEvent.layout.height),
    []
  );
  const input = [0, height * 0.06, height * 0.075, height * 0.09];

  const opacityHeader = useAnimatedStyle(() => {
    const opacity = interpolate(
      translationY.value,
      input,
      [0, 0, 0.1, 1],
      Extrapolate.CLAMP
    );
    const transY = interpolate(
      translationY.value,
      input,
      [30, 20, 15, 0],
      Extrapolate.CLAMP
    );
    const scale = interpolate(translationY.value, input, [0, 0, 1, 1]);
    return {
      opacity: opacity,
      transform: [{ translateY: transY }, { scale: scale }],
      marginBottom: 8,
    };
  }, []);
  const scaleAvatar = useAnimatedStyle(() => {
    const scale = interpolate(translationY.value, input, [1, 0.9, 0.1, 0]);
    const opacity = interpolate(translationY.value, input, [1, 1, 0, 0]);
    return {
      transform: [{ scale: scale }],
      opacity: opacity,
      alignSelf: "center",
      zIndex: 9,
      top: header + top,
    };
  }, [header, top]);
  return (
    <Container style={styles.container} useSafeArea={false}>
      <TopNavigation
        style={{
          position: "absolute",
          top: top,
          zIndex: 10,
        }}
        onLayout={onLayoutHeader}
        appearance={"control"}
        accessoryLeft={
          <View style={styles.flexRow}>
            <NavigationAction marginLeft={4} icon="leftArrow" />
            <Animated.View style={opacityHeader}>
              <Avatar size="40" source={DATA_USER.avatar} />
            </Animated.View>
            <NavigationAction icon="menu" />
          </View>
        }
      />

      <Image
        source={Images.bgTeacher}
        /* @ts-ignore */
        style={styles.bgHeader}
      />

      <Animated.View style={scaleAvatar}>
        <Avatar
          source={DATA_USER.avatar}
          size={"92"}
          /* @ts-ignore */
          style={[styles.avatar]}
        />
      </Animated.View>

      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        contentContainerStyle={{
          marginTop: top + header + 8,
          paddingBottom: bottom + 40,
        }}
      >
        <HeaderTeacher data={DATA_USER} />

        <View style={styles.action}>
          <Button
            accessoryLeft={<Icon pack="assets" name="star" />}
            status={"control"}
            size={"50"}
            children="Meus carros"
            style={styles.mess}
          />
          <Button
            accessoryLeft={<Icon pack="assets" name="addUser" />}
            size="50"
            children="Criar Viagem"
            style={styles.following}
          />
        </View>

        <FrequencyTab
          selectedIndex={selectedIndex}
          onChange={setSelectedIndex}
          tabs={["Minhas Viagens", "Viagens Anteriores"]}
          style={styles.tabBar}
        />

        <ViewPager
          selectedIndex={selectedIndex}
          onSelect={setSelectedIndex}
          style={styles.viewPager}
        >
          <TabCourse data={DATA_COLLECTION} />
          <View></View>
        </ViewPager>
      </Animated.ScrollView>

      <BottomTab />
    </Container>
  );
});

export default ProfilePage;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  viewPager: {
    marginBottom: 90,
  },
  tabBar: {
    marginBottom: 24,
  },
  action: {
    flexDirection: "row",
    marginTop: 24,
    marginHorizontal: 24,
    marginBottom: 24,
  },
  flexRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
    alignItems: "center",
  },
  mess: {
    flex: 1,
    marginRight: 16,
  },
  following: {
    flex: 1,
  },
  bgHeader: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    zIndex: 9,
    width: "100%",
  },
  avatar: {
    borderWidth: 4,
    borderColor: "background-basic-color-1",
    marginBottom: 8,
  },
});

const DATA_USER = {
  name: "Yan Galli",
  avatar: Images.avatar11,
  following: 10,
  follower: 7,
  loves: 3,
};

const DATA_COLLECTION = [
  { id: 0, title: "Motorista", image: Images.collection },
  { id: 1, title: "Motorista", image: Images.collection1 },
  { id: 2, title: "Motorista", image: Images.collection2 },
  { id: 3, title: "Motorista", image: Images.collection3 },
];
