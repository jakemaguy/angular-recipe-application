import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../../models/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
    selector: 'app-recipe-book-item',
    templateUrl: 'recipe_book.item.html'
})

export class RecipeBookItemComponent implements OnInit {
    @Input() recipe: Recipe;

    constructor(private recipeService: RecipeService) {
    }

    ngOnInit() { }

    onClick() {
        this.recipeService.recipeSelected.emit(this.recipe);
    }
}
