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
import { MealType, MealsProvider } from "@contexts/Meals.context";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function App() {
  const [fontsLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold });

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ThemeProvider theme={defaultTheme}>
        <MealsProvider>
          <StatusBar
            barStyle="dark-content"
            backgroundColor="transparent"
            translucent
          />

          <GestureHandlerRootView style={{ flex: 1 }}>
            {fontsLoaded ? <Routes /> : <Loading />}
          </GestureHandlerRootView>
        </MealsProvider>
      </ThemeProvider>
    </SafeAreaView>
  );
}
