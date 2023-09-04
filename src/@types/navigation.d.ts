import { Variant } from "./styled";

export declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {
      home: undefined;
      new: undefined;
      statistic: undefined;
      feedback: {
        variant: Variant;
      };
    }
  }
}

type RouteParamsProps = NativeStackScreenProps<RootStackParamList, "feedback">;

export type FeedbackScreenRouteProp = RouteParamsProps["feedback"];
