import { create } from "zustand"
import { devtools } from "zustand/middleware"
import { createRecipesSilce, RecipesSliceType } from "./recipeSlice"
import { createFavoritesSlice,FavoritesSliceType } from "./favoritesSlice"
import { createNotificationSlice, NotificationSliceType } from "./notificationSlice"

export const useAppStore = create<RecipesSliceType & FavoritesSliceType & NotificationSliceType>()(devtools((...a)=>({
    ...createRecipesSilce(...a),
    ...createFavoritesSlice(...a),
    ...createNotificationSlice(...a)
})))
