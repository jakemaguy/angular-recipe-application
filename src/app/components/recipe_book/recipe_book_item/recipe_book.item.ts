import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../../models/recipe.model';

@Component({
    selector: 'app-recipe-book-item',
    templateUrl: 'recipe_book.item.html'
})

export class RecipeBookItemComponent implements OnInit {
    @Input() recipe: Recipe;
    @Output() selectedRecipe = new EventEmitter<Recipe>();

    constructor() {
    }

    ngOnInit() { }

    onClick() {
        this.selectedRecipe.emit(this.recipe);
    }
}
