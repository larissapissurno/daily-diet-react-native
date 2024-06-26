import "react-native-get-random-values";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, {
  ReactElement,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { v4 as uuidv4 } from "uuid";
import { SectionListData } from "react-native";

export const STORE_MEALS = "@DailyDiet:meals";

export type MealType = {
  id: string;
  name: string;
  description?: string;
  mealDate: Date;
  mealTime: Date;
  onDiet: boolean;
};

export type MealsListItemResponse = {
  id: string;
  time: string;
  description: string;
  onDiet: boolean;
};

type MealsStats = {
  totalMeals: number;
  totalOnDietMeals: number;
  totalOffDietMeals: number;
  onDietMealsPercentage: number;
  bestOnDietStreak: number;
};

type MealsContextProps = {
  meals: MealType[];
  formattedMeals: SectionListData<MealsListItemResponse>[];
  getMealById: (id: string) => MealType | undefined;
  addMeal: (meal: Omit<MealType, "id">) => void;
  removeMeal: (id: string) => void;
  updateMeal: (meal: MealType) => void;
  stats: () => MealsStats;
};

const MealsContext = React.createContext({} as unknown as MealsContextProps);

export function useMealsContext(): MealsContextProps {
  return useContext(MealsContext);
}

export function MealsProvider({
  children,
}: React.PropsWithChildren): ReactElement {
  const [meals, setMeals] = useState<MealType[]>([]);

  useEffect(() => {
    AsyncStorage.getItem(STORE_MEALS).then((result) => {
      setMeals(JSON.parse(result || "[]"));
    });
  }, []);

  const formattedMeals = useMemo(() => {
    const groupedByDate = meals.reduce((acc, meal) => {
      const mealDate = new Date(meal.mealDate);
      const mealTime = new Date(meal.mealTime);

      const dateKey = mealDate.toLocaleDateString(undefined, {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      });

      const mealItem = {
        ...meal,
        time: mealTime.toLocaleTimeString(undefined, {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }),
        description: meal.name,
        onDiet: meal.onDiet,
      };

      if (acc[dateKey]) {
        acc[dateKey].push(mealItem);
      } else {
        acc[dateKey] = [mealItem];
      }

      return acc;
    }, {} as Record<string, MealsListItemResponse[]>);

    const formattedMeals: SectionListData<MealsListItemResponse>[] =
      Object.keys(groupedByDate).map((date) => ({
        title: date,
        data: groupedByDate[date],
      }));

    return formattedMeals;
  }, [meals]);

  async function addMeal(meal: Omit<MealType, "id">) {
    const uuid = await uuidv4();
    const newMeal = {
      ...meal,
      id: uuid,
    };

    setMeals((state) => {
      AsyncStorage.setItem(STORE_MEALS, JSON.stringify([...state, newMeal]));
      return [...state, newMeal];
    });
  }

  async function removeMeal(id: string) {
    setMeals((state) => {
      const newState = state.filter((meal) => meal.id !== id);
      AsyncStorage.setItem(STORE_MEALS, JSON.stringify(newState));
      return newState;
    });
  }

  function updateMeal(meal: MealType) {
    setMeals((state) => {
      const mealIndex = state.findIndex((m) => m.id === meal.id);
      const newState = [...state];
      newState[mealIndex] = meal;

      AsyncStorage.setItem(STORE_MEALS, JSON.stringify(newState));
      return newState;
    });
  }

  function getMealById(id: string): MealType | undefined {
    return meals.find((meal) => meal.id === id);
  }

  function stats(): MealsStats {
    const totalMeals = meals.length;
    const totalOnDietMeals = meals.filter((meal) => meal.onDiet).length;
    const totalOffDietMeals = totalMeals - totalOnDietMeals;

    const bestOnDietStreak = meals.reduce(
      (acc, meal) => {
        if (meal.onDiet) {
          acc.current += 1;
          acc.best = Math.max(acc.best, acc.current);
        } else {
          acc.current = 0;
        }

        return acc;
      },
      { current: 0, best: 0 }
    ).best;

    return {
      totalMeals,
      totalOnDietMeals,
      onDietMealsPercentage: (totalOnDietMeals / totalMeals) * 100,
      totalOffDietMeals,
      bestOnDietStreak,
    };
  }

  const value: MealsContextProps = {
    meals,
    formattedMeals,
    getMealById,
    addMeal,
    removeMeal,
    updateMeal,
    stats,
  };

  return (
    <MealsContext.Provider value={value}>{children}</MealsContext.Provider>
  );
}
