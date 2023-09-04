import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "@screens/home/Home";
import { NewMealFeedback } from "@screens/new-meal-feedback/NewMealFeedback";
import { NewMeal } from "@screens/new-meal/NewMeal";
import { Statistic } from "@screens/statistic/Statistic";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="new" component={NewMeal} />
      <Screen name="feedback" component={NewMealFeedback} />
      <Screen name="statistic" component={Statistic} />
    </Navigator>
  );
}
