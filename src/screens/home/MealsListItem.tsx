import {
  Animated,
  TouchableOpacity,
  View,
  ViewProps,
  Text,
} from "react-native";
import {
  Container,
  Description,
  Status,
  SwipeToDeleteContainer,
  Time,
  TimeContainer,
} from "./MealsListItem.styles";
import { Swipeable } from "react-native-gesture-handler";

type MealsListItemProps = ViewProps & {
  time: string;
  description: string;
  onDiet: boolean;
};

export function MealsListItem({
  time,
  description,
  onDiet,
}: MealsListItemProps) {
  const renderRightActions = (
    progress: Animated.AnimatedInterpolation<any>,
    dragAnimatedValue: Animated.AnimatedInterpolation<any>
  ) => {
    const opacity = dragAnimatedValue.interpolate({
      inputRange: [-150, 0],
      outputRange: [1, 0],
      extrapolate: "clamp",
    });
    return (
      <SwipeToDeleteContainer>
        <View>
          <Text>Are you sure?</Text>
        </View>
        <Animated.View style={[{ opacity }]}>
          <TouchableOpacity>
            <Text>Delete</Text>
          </TouchableOpacity>
        </Animated.View>
      </SwipeToDeleteContainer>
    );
  };

  return (
    <Swipeable renderRightActions={renderRightActions}>
      <Container>
        <TimeContainer>
          <Time>{time}</Time>
        </TimeContainer>
        <Description>{description}</Description>
        <Status variant={onDiet ? "success" : "danger"} />
      </Container>
    </Swipeable>
  );
}
