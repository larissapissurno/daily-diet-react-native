import "styled-components/native";
import defaultTheme from "@themes/default";

declare module "styled-components/native" {
  type ThemeTpe = typeof defaultTheme;

  export interface DefaultTheme extends ThemeTpe {}
}

export type Variant = "success" | "danger" | "default";

export type VariantProps = {
  variant?: Variant;
};
