import { StateCreator } from "zustand";
import { getCategories, getRecipeById, getRecipies } from "../services/RecipeService";
import type { Categories, Drink, Drinks, Recipe, SearchFilter } from "../types";
import { FavoritesSliceType } from "./favoritesSlice";

export type RecipiesSliceType = {
  categories: Categories;
  drinks: Drinks;
  selectedRecipe: Recipe;
  modal: boolean;
  fetchCategories: () => Promise<void>;
  searchRecipies: (searchFilters: SearchFilter) => Promise<void>;
  selectRecipe: (id: Drink["idDrink"]) => Promise<void>;
  closeModal: () => void;
};

export const createRecipesSlice: StateCreator<
  RecipiesSliceType & FavoritesSliceType,
  [],
  [],
  RecipiesSliceType
> = (set) => ({
  categories: {
    drinks: [],
  },
  drinks: {
    drinks: [],
  },
  modal: false,
  fetchCategories: async () => {
    const categories = await getCategories();
    set({
      categories: categories,
    });
  },
  searchRecipies: async (filters) => {
    const drinks = await getRecipies(filters);
    set({
      drinks,
    });
  },
  selectedRecipe: {} as Recipe,
  selectRecipe: async (id) => {
    const selectedRecipe = await getRecipeById(id);

    set({
      selectedRecipe: selectedRecipe,
      modal: true,
    });
  },

  closeModal: () => {
    set({
      modal: false,
      selectedRecipe: {} as Recipe,
    });
  },
});
