import { StatusBar, StyleSheet, Text, View } from "react-native";
import defaultTheme from "@themes/default";

import { ThemeProvider } from "styled-components/native";
import {
  useFonts,
  NunitoSans_400Regular,
  NunitoSans_700Bold,
} from "@expo-google-fonts/nunito-sans";
import { Loading } from "@components/loading/Loading";
import { Home } from "@screens/home/Home";
import { Statistic } from "@screens/statistic/Statistic";
import { NewMeal } from "@screens/new-meal/NewMeal";
import { NewMealFeedback } from "@components/new-meal-feedback/NewMealFeedback";

export default function App() {
  const [fontsLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold });

  return (
    <ThemeProvider theme={defaultTheme}>
      <StatusBar barStyle="default" backgroundColor="transparent" translucent />

      {fontsLoaded ? <NewMealFeedback variant="success" /> : <Loading />}
    </ThemeProvider>
  );
}
