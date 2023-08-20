import { Text, ViewProps } from "react-native";
import {
  Avatar,
  Container,
  Header,
  IconOpen,
  Logo,
  MealsListTitle,
  Percent,
  PercentDescription,
  PercentTitle,
} from "./Home.styles";
import logoImage from "@assets/logo.png";
import avatarImage from "@assets/avatar.png";
import { useTheme } from "styled-components/native";
import { Button } from "@components/button/Button";
import { ReactNode } from "react";
import { MealsListItem } from "./MealsListItem";

type Home = ViewProps & {};

export function Home(props: Home) {
  const theme = useTheme();

  return (
    <Container>
      <Header>
        <Logo source={logoImage} />

        <Avatar source={avatarImage} />
      </Header>

      <Percent>
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

      <Text>{"\n"}</Text>

      <MealsListTitle>20.8.23</MealsListTitle>
      <MealsListItem time="20:00" description="Lasagna" hasEscapedDiet />
    </Container>
  );
}
