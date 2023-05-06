import React, { memo, useEffect } from "react";
import { View } from "react-native";
import { StyleService, useStyleSheet } from "@ui-kitten/components";
import Text from "components/Text";
import ActivityCard from "./ActivityCard";
import Driver from "../../types/entities/Driver";
import Car from "../../types/entities/Car";

interface DataProps {
  id: number;
  avatar: any;
  carSpaces: number;
  cellphone: string;
  departureDay: string;
  departureTime: string;
  departurePlace: string;
  contributionSuggestion: string;
  driver: Driver;
}
interface Props {
  data: DataProps[];
  title: string;
}

const Activity = memo(({ data, title }: Props) => {
  const styles = useStyleSheet(themedStyles);

  return (
    <>
      <View style={styles.title}>
        <Text category="title2">{title}</Text>
      </View>

      {data && data.map((item, i) => {
        return (
          <ActivityCard item={item} key={i + item.id} />
        );
      })}
    </>
  );
});

export default Activity;

const themedStyles = StyleService.create({
  title: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  iconCancel: {
    width: 12,
    height: 12,
    tintColor: "text-snow-color",
  },
  btnDelete: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    backgroundColor: "background-basic-color-2",
    borderRadius: 4,
  },
});
