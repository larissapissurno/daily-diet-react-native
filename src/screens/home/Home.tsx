import { ViewProps } from "react-native";
import {
  Avatar,
  Container,
  Header,
  IconOpen,
  Logo,
  Percent,
  PercentDescription,
  PercentTitle,
} from "./Home.styles";
import logoImage from "@assets/logo.png";
import avatarImage from "@assets/avatar.png";
import { useTheme } from "styled-components/native";

type Home = ViewProps & {};

export function Home(props: Home) {
  const theme = useTheme();

  return (
    <Container>
      <Header>
        <Logo source={logoImage} />

        <Avatar source={avatarImage} />
      </Header>

      <Percent>
        <PercentTitle>90,86%</PercentTitle>
        <PercentDescription>das refeições dentro da dieta</PercentDescription>

        <IconOpen />
      </Percent>
    </Container>
  );
}
