import {
  SectionBase,
  SectionList,
  SectionListData,
  Text,
  ViewProps,
} from "react-native";
import {
  Avatar,
  Container,
  Header,
  IconOpen,
  Logo,
  MealsListTitle,
  MealsListTitleContainer,
  Percent,
  PercentDescription,
  PercentTitle,
} from "./Home.styles";
import logoImage from "@assets/logo.png";
import avatarImage from "@assets/avatar.png";
import { useTheme } from "styled-components/native";
import { Button } from "@components/button/Button";
import { ReactNode, useState } from "react";
import { MealsListItem } from "./MealsListItem";

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

  return (
    <Container>
      <Header>
        <Logo source={logoImage} />

        <Avatar source={avatarImage} />
      </Header>

      <Percent variant="danger">
        <PercentTitle>90,86%</PercentTitle>
        <PercentDescription>das refeições dentro da dieta</PercentDescription>

        <IconOpen />
      </Percent>

      <Text style={{ fontSize: theme.FONT_SIZE.MD, marginTop: 42 }}>
        Refeições
      </Text>

      <Button style={{ marginTop: 12 }} icon="add">
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
