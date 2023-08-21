import { CardStatistics } from "@components/card-statistics/CardStatistics";
import {
  ButtonGoBack,
  Container,
  Header,
  HeaderTitle,
  IconGoBack,
} from "./NewMeal.styles";
import { ContentContainer } from "@components/content-container/ContentContainer.styles";
import React from "react";
import { InputText } from "@components/input-text/InputText";

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

      <ContentContainer>
        <InputText label="Nome" />

        <InputText
          label="Descrição"
          multiline
          numberOfLines={4}
          maxLength={140}
        />
      </ContentContainer>
    </Container>
  );
}
