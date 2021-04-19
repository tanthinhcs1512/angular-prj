import { EventEmitter } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../shopping-list/Ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

export class RecipeService {

    recipeSelected = new Subject<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Tasty Schnitzel', 'A super-tasty Schnitzel - just awesome', 'http://picturetherecipe.com/wp-content/uploads/2020/07/Butter-Chicken-PTR-Featured-680x900.jpg',
        [
            new Ingredient('Meat', 1),
            new Ingredient('French Fries', 20)
        ]), 
        new Recipe('Another Test Recipe', 'Another Delicious', 'http://picturetherecipe.com/wp-content/uploads/2020/07/Butter-Chicken-PTR-Featured-680x900.jpg', 
        [
            new Ingredient('Buns', 2),
            new Ingredient('Meat', 1)
        ])
    ];
    constructor() {

    }

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(id) {
        return this.recipes.slice()[id];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
    }
    
}