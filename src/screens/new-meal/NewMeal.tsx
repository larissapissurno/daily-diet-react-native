import { CardStatistics } from "@components/card-statistics/CardStatistics";
import {
  ButtonGoBack,
  Container,
  Header,
  HeaderTitle,
  IconGoBack,
} from "./NewMeal.styles";
import { ContentContainer } from "@components/content-container/ContentContainer.styles";

type NewMealProps = {};

export function NewMeal({}: NewMealProps) {
  return (
    <Container>
      <Header>
        <HeaderTitle>Nova Refeição</HeaderTitle>

        <ButtonGoBack>
          <IconGoBack />
        </ButtonGoBack>
      </Header>

      <ContentContainer></ContentContainer>
    </Container>
  );
}
