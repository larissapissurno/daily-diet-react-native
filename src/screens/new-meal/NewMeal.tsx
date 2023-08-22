import React from "react";
import { View } from "react-native";
import { InputText } from "@components/input-text/InputText";
import { ContentContainer, Row } from "@components/_shared.styles";
import { DietToggle } from "./DietToggle";
import {
  ButtonGoBack,
  Container,
  Header,
  HeaderTitle,
  IconGoBack,
} from "./NewMeal.styles";

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

      <ContentContainer style={{ gap: 24 }}>
        <InputText label="Nome" />

        <InputText
          label="Descrição"
          multiline
          numberOfLines={4}
          maxLength={140}
        />

        <Row>
          <View style={{ flex: 0.5 }}>
            <InputText label="Data" />
          </View>
          <View style={{ flex: 0.5 }}>
            <InputText label="Hora" />
          </View>
        </Row>

        <DietToggle onValueChange={(isActive) => {}} />
      </ContentContainer>
    </Container>
  );
}
