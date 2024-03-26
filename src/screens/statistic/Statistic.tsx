import { CardStatistics } from "@components/card-statistics/CardStatistics";
import { Container, HeaderContainer, Row, Title } from "./Statistic.styles";
import { ContentContainer } from "@components/_shared.styles";
import { useNavigation } from "@react-navigation/native";
import { useMealsContext } from "@contexts/Meals.context";

export function Statistic() {
  const navigation = useNavigation();
  const mealsStore = useMealsContext();
  const {
    bestOnDietStreak,
    onDietMealsPercentage,
    totalMeals,
    totalOffDietMeals,
    totalOnDietMeals
  } = mealsStore.stats();

  function handleGoBack() {
    navigation.goBack();
  }
  return (
    <Container variant="success">
      <HeaderContainer>
        <CardStatistics
          title={onDietMealsPercentage.toFixed(2) + "%"}
          description="das refeições dentro da dieta"
          variant="success"
          showGoBackIcon
          onPress={handleGoBack}
        />
      </HeaderContainer>

      <ContentContainer>
        <Title>Refeições</Title>

        <CardStatistics
          title={bestOnDietStreak.toString()}
          description="melhor sequência de pratos dentro da dieta"
          variant="default"
          disabled
        />

        <CardStatistics
          title={totalMeals.toString()}
          description="refeições registradas"
          variant="default"
          disabled
        />

        <Row>
          <CardStatistics
            title={totalOnDietMeals.toString()}
            description="refeições dentro da dieta"
            variant="success"
            disabled
            style={{ flex: 0.5 }}
          />

          <CardStatistics
            title={totalOffDietMeals.toString()}
            description="refeições fora da dieta"
            variant="danger"
            disabled
            style={{ flex: 0.5 }}
          />
        </Row>
      </ContentContainer>
    </Container>
  );
}
