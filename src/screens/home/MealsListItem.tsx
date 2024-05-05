import { Dimensions, ViewProps, StyleSheet, Text } from "react-native";
import {
  Container,
  Description,
  Status,
  SwipeToDeleteContainer,
  SwipeToDeleteButton,
  SwipeToDeleteText,
  Time,
  TimeContainer,
  SwipeToDeleteConfirmation,
} from "./MealsListItem.styles";
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
  PanGestureHandlerProps,
  Swipeable,
} from "react-native-gesture-handler";
import { useMealsContext } from "@contexts/Meals.context";
import Animated, {
  FadeIn,
  FadeOut,
  FadeOutLeft,
  Layout,
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedRef,
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
  };

const LIST_ITEM_HEIGHT = 70;

const { width: SCREEN_WIDTH } = Dimensions.get("window");
const TRANSLATE_X_THRESHOLD = SCREEN_WIDTH * 0.5;

export function MealsListItem({
  id,
  time,
  description,
  onDiet,
  simultaneousHandlers,
  onDismiss,
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
      const shouldBeDismissed = translateX.value < TRANSLATE_X_THRESHOLD;
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

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
    };
  });

  const rIconContainerStyle = useAnimatedStyle(() => {
    const opacity = withTiming(
      translateX.value < TRANSLATE_X_THRESHOLD ? 1 : 0
    );
    return { opacity };
  });

  const rTaskContainerStyle = useAnimatedStyle(() => {
    return {
      height: itemHeight.value,
      marginVertical: marginVertical.value,
      opacity: opacity.value,
    };
  });

  // return (
  //   <PanGestureHandler onGestureEvent={panGesture}>
  //     <Reanimated.View
  //       entering={FadeIn}
  //       exiting={FadeOutLeft}
  //       layout={Layout.delay(3000)}
  //     >
  //       <Container>
  //         <TimeContainer>
  //           <Time>{time}</Time>
  //         </TimeContainer>
  //         <Description>{description}</Description>
  //         <Status variant={onDiet ? "success" : "danger"} />
  //       </Container>
  //     </Reanimated.View>
  //   </PanGestureHandler>
  // );
  return (
    <Animated.View style={[styles.taskContainer, rTaskContainerStyle]}>
      <Animated.View style={[styles.iconContainer, rIconContainerStyle]}>
        <TrashSimple size={LIST_ITEM_HEIGHT * 0.4} color={"red"} />
      </Animated.View>
      <PanGestureHandler
        simultaneousHandlers={simultaneousHandlers}
        onGestureEvent={panGesture}
      >
        <Animated.View style={[styles.task, rStyle]}>
          <Text style={styles.taskTitle}>{description}</Text>
        </Animated.View>
      </PanGestureHandler>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  taskContainer: {
    width: "100%",
    alignItems: "center",
  },
  task: {
    width: "100%",
    height: LIST_ITEM_HEIGHT,
    justifyContent: "center",
    paddingLeft: 20,
    backgroundColor: "white",
    borderRadius: 10,
    // Shadow for iOS
    shadowOpacity: 0.08,
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowRadius: 10,
    // Shadow for Android
    elevation: 5,
  },
  taskTitle: {
    fontSize: 16,
  },
  iconContainer: {
    height: LIST_ITEM_HEIGHT,
    width: LIST_ITEM_HEIGHT,
    position: "absolute",
    right: "10%",
    justifyContent: "center",
    alignItems: "center",
  },
});
