import { Button } from "@components/button/Button";
import {
  Container,
  FeedbackImage,
  Subtitle,
  Title,
} from "./NewMealFeedback.styles";
import { Text } from "react-native";
import feedbackPositiveImage from "@assets/new-meal-feedback-positive.png";
import feedbackNegativeImage from "@assets/new-meal-feedback-negative.png";
import { FeedbackScreenRouteProp } from "src/@types/navigation";
import { useNavigation, useRoute } from "@react-navigation/native";

export function NewMealFeedback() {
  const {
    params: { variant },
  } = useRoute<FeedbackScreenRouteProp>();
  const navigation = useNavigation();
  const title = variant === "success" ? "Continue assim!" : "Que pena!";

  function handleGoHome() {
    navigation.navigate("home");
  }

  return (
    <Container>
      <Title variant={variant}>{title}</Title>

      {variant === "success" ? (
        <Subtitle>
          <Text>Você continua </Text>
          <Text style={{ fontWeight: "bold" }}>dentro da dieta. </Text>
          <Text>Muito bem!</Text>
        </Subtitle>
      ) : (
        <Subtitle>
          <Text>Você </Text>
          <Text style={{ fontWeight: "bold" }}>saiu da dieta </Text>
          <Text>dessa vez, mas continue se esforçando e não desista!</Text>
        </Subtitle>
      )}

      <FeedbackImage
        source={
          variant === "success" ? feedbackPositiveImage : feedbackNegativeImage
        }
      />

      <Button style={{ maxWidth: 200 }} onPress={handleGoHome}>
        Ir para a página inicial
      </Button>
    </Container>
  );
}
