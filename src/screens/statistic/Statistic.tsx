import { CardStatistics } from "@components/card-statistics/CardStatistics";
import { Container, HeaderContainer, Row, Title } from "./Statistic.styles";
import { ContentContainer } from "@components/content-container/ContentContainer.styles";

export function Statistic() {
  return (
    <Container variant="success">
      <HeaderContainer>
        <CardStatistics
          title="90,86%"
          description="das refeições dentro da dieta"
          variant="success"
          showGoBackIcon
        />
      </HeaderContainer>

      <ContentContainer>
        <Title>Refeições</Title>

        <CardStatistics
          title="22"
          description="melhor sequência de pratos dentro da dieta"
          variant="default"
          disabled
        />

        <CardStatistics
          title="109"
          description="refeições registradas"
          variant="default"
          disabled
        />

        <Row>
          <CardStatistics
            title="99"
            description="refeições dentro da dieta"
            variant="success"
            disabled
            style={{ flex: 0.5 }}
          />

          <CardStatistics
            title="10"
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
