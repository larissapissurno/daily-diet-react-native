import { SectionList, SectionListData, Text, ViewProps } from "react-native";
import {
  Avatar,
  Container,
  Header,
  Logo,
  MealsListTitle,
  MealsListTitleContainer,
} from "./Home.styles";
import logoImage from "@assets/logo.png";
import avatarImage from "@assets/avatar.png";
import { useTheme } from "styled-components/native";
import { Button } from "@components/button/Button";
import { useState } from "react";
import { MealsListItem } from "./MealsListItem";
import { CardStatistics } from "@components/card-statistics/CardStatistics";
import { Plus } from "phosphor-react-native";
import { useNavigation } from "@react-navigation/native";

type MealsListItemResponse = {
  time: string;
  description: string;
  hasEscapedDiet: boolean;
};

type Home = ViewProps & {};

const MEALS_DATA = [
  {
    title: "20.08.23",
    data: [
      { time: "20:00", description: "Lasagna", hasEscapedDiet: true },
      { time: "17:00", description: "Pão com café", hasEscapedDiet: false },
      { time: "14:00", description: "Lasagna e Arroz", hasEscapedDiet: false },
      { time: "08:00", description: "Café", hasEscapedDiet: false },
      { time: "08:00", description: "Café", hasEscapedDiet: false },
      { time: "08:00", description: "Café", hasEscapedDiet: false },
      { time: "08:00", description: "Café", hasEscapedDiet: false },
    ],
  },
  {
    title: "19.08.23",
    data: [
      { time: "20:00", description: "Lasagna", hasEscapedDiet: true },
      { time: "17:00", description: "Pão com café", hasEscapedDiet: false },
      { time: "14:00", description: "Lasagna e Arroz", hasEscapedDiet: false },
      { time: "08:00", description: "Café", hasEscapedDiet: false },
      { time: "08:00", description: "Café", hasEscapedDiet: false },
      { time: "08:00", description: "Café", hasEscapedDiet: false },
      { time: "08:00", description: "Café", hasEscapedDiet: false },
    ],
  },
];

export function Home(props: Home) {
  const theme = useTheme();
  const [meals, setMeals] =
    useState<SectionListData<MealsListItemResponse>[]>(MEALS_DATA);

  const navigation = useNavigation();

  function handleNewMeal() {
    navigation.navigate("new");
  }

  function handleGoToStatistic() {
    navigation.navigate("statistic");
  }

  return (
    <Container>
      <Header>
        <Logo source={logoImage} />

        <Avatar source={avatarImage} />
      </Header>

      <CardStatistics
        title="90,98%"
        description="das refeições dentro da dieta"
        variant="success"
        showDetailsIcon
        onPress={handleGoToStatistic}
      />

      <Text style={{ fontSize: theme.FONT_SIZE.MD, marginTop: 42 }}>
        Refeições
      </Text>

      <Button
        style={{ marginTop: 12 }}
        iconElement={
          <Plus color={theme.COLORS.WHITE} size={20} weight="bold" />
        }
        onPress={handleNewMeal}
      >
        Nova refeição
      </Button>

      <SectionList<MealsListItemResponse>
        sections={meals}
        keyExtractor={(item, index) => item.description + index}
        renderItem={({ item }) => <MealsListItem {...item} />}
        renderSectionHeader={({ section: { title } }) => (
          <MealsListTitleContainer>
            <MealsListTitle>{title}</MealsListTitle>
          </MealsListTitleContainer>
        )}
        style={{ marginTop: 24 }}
      />
    </Container>
  );
}
