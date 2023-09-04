import React from "react";
import { View } from "react-native";
import { InputText } from "@components/input-text/InputText";
import { ContentContainer, Row } from "@components/_shared.styles";
import { DietToggle } from "./DietToggle";
import {
  ButtonGoBack,
  Container,
  Form,
  Header,
  HeaderTitle,
  IconGoBack,
} from "./NewMeal.styles";
import { Button } from "@components/button/Button";
import { useNavigation } from "@react-navigation/native";

type NewMealProps = {};

export function NewMeal({}: NewMealProps) {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  function handleNewMeal() {
    navigation.navigate("feedback", { variant: "success" });
  }

  return (
    <Container>
      <Header>
        <HeaderTitle>Nova Refeição</HeaderTitle>

        <ButtonGoBack onPress={handleGoBack}>
          <IconGoBack />
        </ButtonGoBack>
      </Header>

      <ContentContainer style={{ gap: 24 }}>
        <Form>
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
        </Form>

        <Button onPress={handleNewMeal}>Cadastrar refeição</Button>
      </ContentContainer>
    </Container>
  );
}
