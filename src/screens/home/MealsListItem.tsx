import { Dimensions, ViewProps } from "react-native";
import {
  MealContentContainer,
  Description,
  SwipeToDeleteContainer,
  ListItemContainer,
  Status,
  Time,
  TimeContainer,
} from "./MealsListItem.styles";
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
  PanGestureHandlerProps,
} from "react-native-gesture-handler";
import Animated, {
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { TrashSimple } from "phosphor-react-native";

type Task = {
  id: string;
  time: string;
  description: string;
  onDiet: boolean;
};

type MealsListItemProps = Pick<PanGestureHandlerProps, "simultaneousHandlers"> &
  ViewProps &
  Task & {
    onDismiss: (task: Task) => void;
    onPress: (taskId: string) => void;
  };

const LIST_ITEM_HEIGHT = 50;

const { width: SCREEN_WIDTH } = Dimensions.get("window");
// swipe to right = translateX.value > 0, swipe to left = translateX.value < 0
const TRANSLATE_X_THRESHOLD = SCREEN_WIDTH * 0.3 * -1;

export function MealsListItem({
  id,
  time,
  description,
  onDiet,
  simultaneousHandlers,
  onDismiss,
  onPress,
}: MealsListItemProps) {
  const translateX = useSharedValue(0);
  const itemHeight = useSharedValue(LIST_ITEM_HEIGHT);
  const marginVertical = useSharedValue(10);
  const opacity = useSharedValue(1);

  const panGesture = useAnimatedGestureHandler<PanGestureHandlerGestureEvent>({
    onActive: (event) => {
      translateX.value = event.translationX;
    },
    onEnd: () => {
      console.log("TRANSLATE_X_THRESHOLD ", TRANSLATE_X_THRESHOLD);
      console.log("translateX.value ", translateX.value);
      const shouldBeDismissed =
        translateX.value < 0 && translateX.value < TRANSLATE_X_THRESHOLD;
      if (shouldBeDismissed) {
        translateX.value = -SCREEN_WIDTH;
        itemHeight.value = withTiming(0);
        marginVertical.value = withTiming(0);
        opacity.value = withTiming(0, undefined, (isFinished) => {
          if (isFinished && onDismiss) {
            const task: Task = { id, time, description, onDiet };
            runOnJS(onDismiss)(task);
          }
        });
      } else {
        translateX.value = withTiming(0);
      }
    },
  });

  const reanimatedListItemContainer = useAnimatedStyle(() => {
    return {
      height: itemHeight.value,
      marginVertical: marginVertical.value,
      opacity: opacity.value,
    };
  });

  const reanimatedSwipeToDeleteContainer = useAnimatedStyle(() => {
    const shouldBeDismissed =
      translateX.value < 0 && translateX.value < TRANSLATE_X_THRESHOLD;

    const opacity = withTiming(shouldBeDismissed ? 1 : 0.8);
    return { opacity };
  });

  const reanimatedMealContainer = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
    };
  });

  return (
    <ListItemContainer style={reanimatedListItemContainer}>
      <SwipeToDeleteContainer style={reanimatedSwipeToDeleteContainer}>
        <TrashSimple size={20} color={"white"} weight="bold" />
      </SwipeToDeleteContainer>
      <PanGestureHandler
        simultaneousHandlers={simultaneousHandlers}
        onGestureEvent={panGesture}
        activeOffsetX={[0, 200]}
      >
        <Animated.View style={[reanimatedMealContainer]}>
          <MealContentContainer onLongPress={() => onPress(id)}>
            <TimeContainer>
              <Time>{time}</Time>
            </TimeContainer>
            <Description>{description}</Description>
            <Status variant={onDiet ? "success" : "danger"} />
          </MealContentContainer>
        </Animated.View>
      </PanGestureHandler>
    </ListItemContainer>
  );
}
