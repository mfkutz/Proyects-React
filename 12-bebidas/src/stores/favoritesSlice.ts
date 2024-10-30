import { StateCreator } from "zustand";
import { Recipe } from "../types";
import { createNotificationSlice, NotificationSliceType } from "./notificationSlice";
import { createRecipesSlice, RecipiesSliceType } from "./recipeSlice";

export type FavoritesSliceType = {
  favorites: Recipe[];
  handleClickFavorite: (recipe: Recipe) => void;
  favoriteExists: (id: Recipe["idDrink"]) => boolean;
  loadFromStorage: () => void;
};

export const createFavoritesSlice: StateCreator<
  FavoritesSliceType & RecipiesSliceType & NotificationSliceType,
  [],
  [],
  FavoritesSliceType
> = (set, get, api) => ({
  favorites: [],
  handleClickFavorite: (recipe) => {
    if (get().favorites.some((favorite) => favorite.idDrink === recipe.idDrink)) {
      set((state) => ({
        favorites: state.favorites.filter((favorite) => favorite.idDrink !== recipe.idDrink),
      }));
      //using another slice here
      createNotificationSlice(set, get, api).showNotification({
        text: "Se eliminó de favoritos",
        error: false,
      });
    } else {
      set((state) => ({
        favorites: [...state.favorites, recipe],
      }));
      //using another slice here
      createNotificationSlice(set, get, api).showNotification({
        text: "Se agregó a favoritos",
        error: false,
      });
    }
    //using another slice here
    createRecipesSlice(set, get, api).closeModal();
    //Set localstorage
    localStorage.setItem("favorites", JSON.stringify(get().favorites));
  },

  //this function is for dinamic button text in modal
  favoriteExists: (id) => {
    return get().favorites.some((favorite) => favorite.idDrink === id);
  },

  loadFromStorage: () => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      set({
        favorites: JSON.parse(storedFavorites),
      });
    }
  },
});
