import { NavigationContainer } from "@react-navigation/native";
import { AppRoutes } from "./app.routes";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "styled-components/native";

export function Routes() {
  const theme = useTheme();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.COLORS.WHITE }}>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </SafeAreaView>
  );
}
