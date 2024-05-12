import { Variant } from "./styled";

export declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {
      home: undefined;
      meal: {
        action: "create" | "edit";
        mealId?: string;
      };
      statistic: undefined;
      feedback: {
        variant: Variant;
      };
    }
  }
}

type RouteParamsProps = NativeStackScreenProps<RootStackParamList, "feedback">;

export type FeedbackScreenRouteProp = RouteParamsProps["feedback"];

export type MealRouteProp = NativeStackScreenProps<
  RootStackParamList,
  "meal"
>["meal"];
