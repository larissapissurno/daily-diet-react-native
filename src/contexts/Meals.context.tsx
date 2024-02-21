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

export type Meal = {
  id: string;
  name: string;
  description?: string;
  mealDate: Date;
  mealTime: Date;
  onDiet: boolean;
};

export type MealsListItemResponse = {
  time: string;
  description: string;
  onDiet: boolean;
};

type MealsContextProps = {
  meals: Meal[];
  formattedMeals: SectionListData<MealsListItemResponse>[];
  addMeal: (meal: Omit<Meal, "id">) => void;
};

const MealsContext = React.createContext({} as unknown as MealsContextProps);

export function useMealsContext(): MealsContextProps {
  return useContext(MealsContext);
}

export function MealsProvider({
  children,
}: React.PropsWithChildren): ReactElement {
  const [meals, setMeals] = useState<Meal[]>([]);

  useEffect(() => {
    AsyncStorage.getItem(STORE_MEALS).then((result) => {
      setMeals(JSON.parse(result || "[]"));
    });
  }, []);

  const formattedMeals = useMemo(() => {
    const groupedByDate = meals.reduce((acc, meal) => {
      const mealDate = new Date(meal.mealDate);
      const mealTime = new Date(meal.mealTime);

      const dateKey = mealDate.toISOString().split("T")[0];

      const mealItem = {
        time: mealTime.toISOString(),
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

  async function addMeal(meal: Omit<Meal, "id">) {
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

  const value: MealsContextProps = { meals, formattedMeals, addMeal };

  return (
    <MealsContext.Provider value={value}>{children}</MealsContext.Provider>
  );
}
