import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from '../models/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Chicken Parmesan',
      'Tender Pan Fried Chicken Breasts topped with tomato sauce.',
      'https://www.cookingclassy.com/wp-content/uploads/2013/02/chicken-parmesan-16.jpg'),

    new Recipe('Buffalo Mac And Cheese',
      'Delicious Buf mac.  Perfect for any party.',
      'https://spicysouthernkitchen.com/wp-content/uploads/Buffalo-Chicken-Mac-and-Cheese-8.jpg')
  ];

  getRecipes() {
    return this.recipes.slice(); // returns new array, exact copy
  }
}
