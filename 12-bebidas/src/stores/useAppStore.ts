import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { createRecipesSlice, RecipiesSliceType } from "./recipeSlice";

export const useAppStore = create<RecipiesSliceType>()(
  devtools((...a) => ({
    ...createRecipesSlice(...a), //recuperamos argumentos set,get,api desde los slices
  }))
);
