import { StateCreator } from "zustand";
import { Recipe } from "../types";
import { createRecipesSilce, RecipesSliceType } from "./recipeSlice";
import { createNotificationSlice, NotificationSliceType } from "./notificationSlice";

export type FavoritesSliceType = {
    favorites: Recipe[],
    favoriteExists:(id:Recipe['idDrink'])=> boolean
    handleClickFavorite: (recipe: Recipe) => void,
    loadFromStorage: () => void
}

export const createFavoritesSlice: StateCreator<FavoritesSliceType & RecipesSliceType & NotificationSliceType,[],[],FavoritesSliceType> = (set, get, api) => ({
    favorites: [],
    handleClickFavorite: (recipe) => {
    
        if (get().favoriteExists(recipe.idDrink)) {
            console.log('si existe')
            set((state) => ({
                favorites: state.favorites.filter(favorite => favorite.idDrink !== recipe.idDrink)
            }))
            createNotificationSlice(set,get,api).showNotification({text:'Se eliminó de favoritos',error:false})
        } else {
            console.log('no existe')
            set((state) => ({
                favorites: [...state.favorites, recipe]
            }))
            createNotificationSlice(set,get,api).showNotification({text:'Se agregó de favoritos',error:false})
        }
        createRecipesSilce(set,get,api).closeModal()
        localStorage.setItem('favorites',JSON.stringify(get().favorites))
    },
    favoriteExists:(id)=>{
        return get().favorites.some(favorite => favorite.idDrink === id)
    },
    loadFromStorage: ()=>{
        const storedFavorites = localStorage.getItem('favorites')
        if(storedFavorites){
            set({
                favorites:JSON.parse(storedFavorites)
            })
        }
    }
})

