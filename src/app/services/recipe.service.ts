import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { Ingredient } from '../models/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Chicken Parmesan',
      'Tender Pan Fried Chicken Breasts topped with tomato sauce.',
      'https://www.cookingclassy.com/wp-content/uploads/2013/02/chicken-parmesan-16.jpg',
      [
        new Ingredient('Chicken Breast', 1),
        new Ingredient('Tomato Sauce', 2),
        new Ingredient('Basil', 4)
      ]),

    new Recipe('Buffalo Mac And Cheese',
      'Delicious Buf mac.  Perfect for any party.',
      'https://spicysouthernkitchen.com/wp-content/uploads/Buffalo-Chicken-Mac-and-Cheese-8.jpg',
      [
        new Ingredient('Elbow Pasta Box', 1),
        new Ingredient('Hot Sauce', 1),
        new Ingredient('Cheddar Cheese Bag', 1)
      ])
  ];

  getRecipes() {
    return this.recipes.slice(); // returns new array, exact copy
  }
}
