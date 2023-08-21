import { CardStatistics } from "@components/card-statistics/CardStatistics";
import {
  Container,
  Content,
  HeaderContainer,
  Row,
  Title,
} from "./Statistic.styles";

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

      <Content>
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
      </Content>
    </Container>
  );
}
