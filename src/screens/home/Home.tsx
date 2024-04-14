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
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";

type Home = ViewProps & {};

export function Home(props: Home) {
  const theme = useTheme();
  const mealsStore = useMealsContext();
  const { onDietMealsPercentage } = mealsStore.stats();

  console.log("mealsStore", mealsStore.formattedMeals);

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
        title={onDietMealsPercentage.toFixed(2) + "%"}
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
        sections={mealsStore.formattedMeals}
        keyExtractor={(item, index) => item.description + index}
        renderItem={({ item }) => <MealsListItem {...item} />}
        renderSectionHeader={({ section: { title } }) => (
          <Animated.View entering={FadeIn} exiting={FadeOut}>
            <MealsListTitleContainer>
              <MealsListTitle>{title}</MealsListTitle>
            </MealsListTitleContainer>
          </Animated.View>
        )}
        style={{ marginTop: 24 }}
      />
    </Container>
  );
}
