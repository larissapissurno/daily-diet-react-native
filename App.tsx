import { SafeAreaView, StatusBar } from "react-native";
import defaultTheme from "@themes/default";

import { ThemeProvider } from "styled-components/native";
import {
  useFonts,
  NunitoSans_400Regular,
  NunitoSans_700Bold,
} from "@expo-google-fonts/nunito-sans";
import { Loading } from "@components/loading/Loading";
import { Routes } from "@routes/Routes";
import { Meal, MealsProvider } from "@contexts/Meals.context";

export default function App() {
  const [fontsLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold });

  return (
    <ThemeProvider theme={defaultTheme}>
      <MealsProvider>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="transparent"
          translucent
        />

        {fontsLoaded ? <Routes /> : <Loading />}
      </MealsProvider>
    </ThemeProvider>
  );
}
