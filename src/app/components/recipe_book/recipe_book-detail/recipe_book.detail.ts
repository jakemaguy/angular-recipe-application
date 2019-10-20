import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { Ingredient } from 'src/app/models/ingredient.model';
import { RecipeService } from '../../../services/recipe.service';


@Component({
    selector: 'app-recipe-book-detail',
    templateUrl: 'recipe_book.detail.html'
})

export class RecipeBookDetailComponent implements OnInit {
    @Input() recipe: Recipe;

    constructor(private recipeService: RecipeService) { }

    ngOnInit() {

    }

    addToShoppingList() {
        this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
    }
}
