import { useEffect, useState } from "react";
import {
  Container,
  Option,
  OptionText,
  OptionStatus,
  Label,
} from "./DietToggle.styles";
import { ViewProps } from "react-native-svg/lib/typescript/fabric/utils";
import { View } from "react-native";

type DietToggleProps = ViewProps & {
  dietEnabled: boolean;
  onValueChange: (value: boolean) => void;
};

export function DietToggle({
  dietEnabled,
  onValueChange,
  ...rest
}: DietToggleProps) {
  const [isActive, setIsActive] = useState<boolean | null>(null);

  useEffect(() => {
    console.log("dietEnabled: ", dietEnabled);
    setIsActive(!!dietEnabled);
  }, [dietEnabled]);

  function handlePress(active: boolean) {
    setIsActive(active);
    onValueChange(active);
  }

  return (
    <View>
      <Label>Está dentro da dieta?</Label>
      <Container>
        <Option
          onPress={() => handlePress(true)}
          isActive={isActive === true}
          variant="success"
        >
          <OptionStatus variant="success" />
          <OptionText>Sim</OptionText>
        </Option>

        <Option
          onPress={() => handlePress(false)}
          isActive={isActive === false}
          variant="danger"
        >
          <OptionStatus variant="danger" />
          <OptionText>Não</OptionText>
        </Option>
      </Container>
    </View>
  );
}
