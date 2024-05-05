import { Dimensions, ViewProps, StyleSheet } from "react-native";
import {
  Container,
  Description,
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
import { useTheme, DefaultTheme } from "styled-components";

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

const LIST_ITEM_HEIGHT = 50;

const { width: SCREEN_WIDTH } = Dimensions.get("window");
// swipe to right = translateX.value > 0, swipe to left = translateX.value < 0
const TRANSLATE_X_THRESHOLD = SCREEN_WIDTH * 0.5 * -1;

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
  const theme = useTheme();
  const styles = stylesFn(theme);

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

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
    };
  });

  const rIconContainerStyle = useAnimatedStyle(() => {
    const shouldBeDismissed =
      translateX.value < 0 && translateX.value < TRANSLATE_X_THRESHOLD;

    const opacity = withTiming(shouldBeDismissed ? 1 : 0.8);
    return { opacity };
  });

  const rTaskContainerStyle = useAnimatedStyle(() => {
    return {
      height: itemHeight.value,
      marginVertical: marginVertical.value,
      opacity: opacity.value,
    };
  });

  return (
    <Animated.View style={[styles.taskContainer, rTaskContainerStyle]}>
      <Animated.View style={[styles.iconContainer, rIconContainerStyle]}>
        <TrashSimple size={20} color={"white"} weight="bold" />
      </Animated.View>
      <PanGestureHandler
        simultaneousHandlers={simultaneousHandlers}
        onGestureEvent={panGesture}
      >
        <Animated.View style={[rStyle]}>
          <Container>
            <TimeContainer>
              <Time>{time}</Time>
            </TimeContainer>
            <Description>{description}</Description>
            <Status variant={onDiet ? "success" : "danger"} />
          </Container>
        </Animated.View>
      </PanGestureHandler>
    </Animated.View>
  );
}

const stylesFn = (theme: DefaultTheme) =>
  StyleSheet.create({
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
      width: "100%",
      height: "100%",
      maxHeight: LIST_ITEM_HEIGHT,
      position: "absolute",
      justifyContent: "center",
      alignItems: "flex-end",
      backgroundColor: theme.COLORS.RED_DARKER,
      borderRadius: 6,
      paddingRight: 16,
    },
  });
