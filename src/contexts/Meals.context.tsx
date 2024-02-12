import "react-native-get-random-values";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { ReactElement, useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const STORE_MEALS = "@DailyDiet:meals";

export type Meal = {
  id: string;
  name: string;
  description?: string;
  mealDate: Date;
  mealTime: Date;
};

type MealsContextProps = {
  meals: Meal[];
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

  useEffect(() => console.log("MEALS UPDATED ", meals), [meals]);

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

  const value: MealsContextProps = { meals, addMeal };

  return (
    <MealsContext.Provider value={value}>{children}</MealsContext.Provider>
  );
}
