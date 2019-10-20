import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { Ingredient } from 'src/app/models/ingredient.model';
import { ShoppingListService } from '../../../services/shopping-list.service';


@Component({
    selector: 'app-recipe-book-detail',
    templateUrl: 'recipe_book.detail.html'
})

export class RecipeBookDetailComponent implements OnInit {
    @Input() recipe: Recipe;

    constructor(private shopppingList: ShoppingListService) { }

    ngOnInit() {

    }

    addToShoppingList() {
        this.recipe.ingredients.forEach((ingredient: Ingredient) => {
            this.shopppingList.addIngredient(ingredient);
        });
    }
}
