import { CardStatistics } from "@components/card-statistics/CardStatistics";
import {
  ButtonGoBack,
  Container,
  Header,
  HeaderTitle,
  IconGoBack,
} from "./NewMeal.styles";
import React from "react";
import { InputText } from "@components/input-text/InputText";
import { View } from "react-native";
import { ContentContainer } from "@components/_shared.styles";

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

        <View style={{ flexDirection: "row", width: "100%", gap: 16 }}>
          <View style={{ flex: 0.5 }}>
            <InputText label="Data" />
          </View>
          <View style={{ flex: 0.5 }}>
            <InputText label="Hora" />
          </View>
        </View>
      </ContentContainer>
    </Container>
  );
}
