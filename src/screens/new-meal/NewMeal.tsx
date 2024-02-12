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
  Label,
  DateTimeInput,
} from "./NewMeal.styles";
import { Button } from "@components/button/Button";
import { useNavigation } from "@react-navigation/native";

import { z } from "zod";
import { newMealFormSchema } from "./NewMeal.validations";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormHelper } from "@components/input-text/InputText.styles";
import { Variant } from "src/@types/styled";
import { Meal, useMealsContext } from "@contexts/Meals.context";

type NewMealFormSchema = z.infer<typeof newMealFormSchema>;

type NewMealProps = {};

export function NewMeal({}: NewMealProps) {
  const defaultDate = new Date();

  const navigation = useNavigation();
  const mealsStore = useMealsContext();

  const form = useForm<NewMealFormSchema>({
    resolver: zodResolver(newMealFormSchema),
    defaultValues: {
      name: "",
    },
  });

  function handleGoBack() {
    navigation.goBack();
  }

  function handleNewMeal(data: NewMealFormSchema) {
    console.log("form data: ", data);

    mealsStore.addMeal(data as Omit<Meal, "id">);

    const feedbackVariant: Variant = data.onDiet ? "success" : "danger";
    navigation.navigate("feedback", { variant: feedbackVariant });
  }

  console.log("errors: ", form.formState.errors);

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
          <Controller
            control={form.control}
            name="name"
            render={({ field: { value, onChange, onBlur } }) => (
              <InputText
                label="Nome"
                value={value}
                error={form.formState.errors?.name}
                onChange={(e) => onChange(e.nativeEvent.text)}
                onBlur={onBlur}
              />
            )}
          />

          <Controller
            control={form.control}
            name="description"
            render={({ field: { value, onChange, onBlur } }) => (
              <InputText
                label="Descrição"
                value={value}
                defaultValue=""
                onChange={(e) => onChange(e.nativeEvent.text)}
                onBlur={onBlur}
                multiline
              />
            )}
          />

          <Row>
            <View
              style={{
                flex: 0.5,
                alignItems: "stretch",
              }}
            >
              <Label>Data</Label>

              <Controller
                name="mealDate"
                control={form.control}
                defaultValue={defaultDate}
                render={({ field }) => (
                  <DateTimeInput
                    onChange={(e, value) => form.setValue("mealDate", value)}
                    style={{ width: 160 }}
                    value={field.value || defaultDate}
                    mode="date"
                    is24Hour
                  />
                )}
              />
            </View>
            <View
              style={{
                flex: 0.5,
                alignItems: "stretch",
              }}
            >
              <Label>Hora</Label>

              <Controller
                control={form.control}
                name="mealTime"
                defaultValue={defaultDate}
                render={({ field }) => (
                  <DateTimeInput
                    onChange={(e, value) => form.setValue("mealTime", value)}
                    style={{ width: 70 }}
                    value={field.value || defaultDate}
                    mode="time"
                    is24Hour
                  />
                )}
              />
            </View>
          </Row>

          <Controller
            control={form.control}
            name="onDiet"
            render={({ field: { onChange } }) => (
              <DietToggle onValueChange={onChange} />
            )}
          />

          {form.formState.errors?.onDiet && (
            <FormHelper error>
              * Selecione 'Sim' ou 'Não' para informar se a refeição está na
              dieta.
            </FormHelper>
          )}
        </Form>

        <Button onPress={form.handleSubmit(handleNewMeal)}>
          Cadastrar refeição
        </Button>
      </ContentContainer>
    </Container>
  );
}
