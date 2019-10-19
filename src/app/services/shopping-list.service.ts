import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../models/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredientAdded = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Avacados', 2),
    new Ingredient('Tomatoes', 5)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientAdded.emit(this.getIngredients());
  }
}
