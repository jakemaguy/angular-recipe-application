import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../../models/recipe.model';
import { RecipeService } from '../../../services/recipe.service';

@Component({
    selector: 'app-recipe-book-list',
    templateUrl: 'recipe_book.list.html',
    providers: [RecipeService]
})

export class RecipeBookListComponent implements OnInit {
    recipes: Recipe[];
    selectedRecipe: Recipe;

    constructor(private recipeService: RecipeService) {
    }

    ngOnInit() {
        this.recipes = this.recipeService.getRecipes();

        this.recipeService.recipeSelected
        .subscribe(
            (recipe: Recipe) => {
                this.selectedRecipe = recipe;
            }
        );
     }

}
