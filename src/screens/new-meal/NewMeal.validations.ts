import { z as schema } from "zod";

export const newMealFormSchema = schema.object({
  name: schema.string().min(1, "Informe o nome."),
  description: schema.string().optional(),
  mealDate: schema.date().optional(),
  mealTime: schema.date().optional(),
  onDiet: schema.boolean(),
});
