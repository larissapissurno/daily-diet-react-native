import React, { useState } from "react";
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
import DateTimePicker from "@react-native-community/datetimepicker";

type NewMealProps = {};

export function NewMeal({}: NewMealProps) {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());

  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  function handleNewMeal() {
    navigation.navigate("feedback", { variant: "success" });
  }

  function handleDateChange(event: unknown, selectedDate: unknown) {
    const currentDate = selectedDate || date;
    setDate(currentDate as Date);
  }

  function handleTimeChange(event: unknown, selectedTime: unknown) {
    const currentTime = selectedTime || time;
    setTime(currentTime as Date);
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
            <View
              style={{
                flex: 0.5,
                alignItems: "stretch",
              }}
            >
              <Label>Data</Label>

              <DateTimeInput
                onChange={handleDateChange}
                style={{ width: 160 }}
                value={date}
                mode="date"
                is24Hour
              />
            </View>
            <View
              style={{
                flex: 0.5,
                alignItems: "stretch",
              }}
            >
              <Label>Hora</Label>

              <DateTimeInput
                onChange={handleTimeChange}
                style={{ width: 70 }}
                value={time}
                mode="time"
                is24Hour
              />
            </View>
          </Row>

          <DietToggle onValueChange={(isActive) => {}} />
        </Form>

        <Button onPress={handleNewMeal}>Cadastrar refeição</Button>
      </ContentContainer>
    </Container>
  );
}
