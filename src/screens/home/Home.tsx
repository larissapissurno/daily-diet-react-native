import { SectionList, Text, ViewProps } from "react-native";
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
import { MealsListItem } from "./MealsListItem";
import { CardStatistics } from "@components/card-statistics/CardStatistics";
import { Plus } from "phosphor-react-native";
import { useNavigation } from "@react-navigation/native";
import {
  MealsListItemResponse,
  useMealsContext,
} from "@contexts/Meals.context";
import { useMemo, useRef } from "react";

type Home = ViewProps & {};

export function Home(props: Home) {
  const theme = useTheme();
  const mealsStore = useMealsContext();

  const { onDietMealsPercentage } = mealsStore.stats();

  console.log("mealsStore", mealsStore.formattedMeals);

  const navigation = useNavigation();
  const scrollRef = useRef(null);

  const statisticSubtitle = useMemo(() => {
    if (mealsStore.formattedMeals.length === 0) {
      return "Cadastre suas refeições para começar a acompanhar seu progresso!";
    }

    return "das refeições dentro da dieta";
  }, [mealsStore.formattedMeals]);

  const statisticTitle = useMemo(() => {
    if (mealsStore.formattedMeals.length === 0) {
      return "";
    }

    return onDietMealsPercentage.toFixed(2) + "%";
  }, [mealsStore.formattedMeals]);

  function handleNewMeal() {
    navigation.navigate("new");
  }

  function handleGoToStatistic() {
    if (mealsStore.formattedMeals.length === 0) {
      return;
    }

    navigation.navigate("statistic");
  }

  function deleteMealHandler(taskId: string) {
    // start the animation
    mealsStore.removeMeal(taskId);
  }

  return (
    <Container>
      <Header>
        <Logo source={logoImage} />

        <Avatar source={avatarImage} />
      </Header>

      <CardStatistics
        title={statisticTitle}
        description={statisticSubtitle}
        variant="success"
        showDetailsIcon={mealsStore.formattedMeals.length > 0}
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
        ref={scrollRef}
        sections={mealsStore.formattedMeals}
        keyExtractor={(item, index) => item.description + index}
        renderItem={({ item }) => (
          <MealsListItem
            {...item}
            onDismiss={(task) => deleteMealHandler(task.id)}
            simultaneousHandlers={scrollRef}
          />
        )}
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
