import { create } from "zustand"
import { devtools } from "zustand/middleware"
import { createRecipesSilce, RecipesSliceType } from "./recipeSlice"

export const useAppStore = create<RecipesSliceType>()(devtools((...a)=>({
    ...createRecipesSilce(...a)
})))