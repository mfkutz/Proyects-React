import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { createRecipesSlice, RecipiesSliceType } from "./recipeSlice";
import { createFavoritesSlice, FavoritesSliceType } from "./favoritesSlice";
import { createNotificationSlice, NotificationSliceType } from "./notificationSlice";

export const useAppStore = create<RecipiesSliceType & FavoritesSliceType & NotificationSliceType>()(
  devtools((...a) => ({
    ...createRecipesSlice(...a), //recuperamos argumentos set,get,api desde los slices
    ...createFavoritesSlice(...a), //recuperamos argumentos set,get,api desde los slices
    ...createNotificationSlice(...a), //recuperamos argumentos set,get,api desde los slices
  }))
);
