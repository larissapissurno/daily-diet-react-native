import { useState } from "react";
import {
  Container,
  Option,
  OptionText,
  OptionStatus,
  Label,
} from "./DietToggle.styles";
import { ViewProps } from "react-native-svg/lib/typescript/fabric/utils";

type DietToggleProps = ViewProps & {
  onValueChange: (value: boolean) => void;
};

export function DietToggle({ onValueChange, ...rest }: DietToggleProps) {
  const [isActive, setIsActive] = useState<boolean | null>(null);

  function handlePress(active: boolean) {
    setIsActive(active);
    onValueChange(active);
  }

  return (
    <>
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
    </>
  );
}
