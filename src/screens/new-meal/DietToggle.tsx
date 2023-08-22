import { useState } from "react";
import {
  Container,
  Option,
  OptionText,
  OptionStatus,
} from "./DietToggle.styles";

type DietToggleProps = {
  onValueChange: (value: boolean) => void;
};

export function DietToggle({ onValueChange }: DietToggleProps) {
  const [isActive, setIsActive] = useState<boolean | null>(null);

  function handlePress(active: boolean) {
    setIsActive(active);
    onValueChange(active);
  }

  return (
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
  );
}
