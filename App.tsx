import { StatusBar, StyleSheet, Text, View } from "react-native";
import defaultTheme from "@themes/default";

import { ThemeProvider } from "styled-components/native";
import {
  useFonts,
  NunitoSans_400Regular,
  NunitoSans_700Bold,
} from "@expo-google-fonts/nunito-sans";
import { Loading } from "@components/loading/Loading";

export default function App() {
  const [fontsLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold });

  return (
    <ThemeProvider theme={defaultTheme}>
      <StatusBar barStyle="default" backgroundColor="transparent" translucent />

      {fontsLoaded ? (
        <View style={styles.container}>
          <Text>
            Open up App.tsx to start working on your app! lalalaaa a a a
          </Text>
        </View>
      ) : (
        <Loading />
      )}
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
