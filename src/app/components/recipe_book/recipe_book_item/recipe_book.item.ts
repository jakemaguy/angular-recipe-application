import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../../models/recipe.model';

@Component({
    selector: 'app-recipe-book-item',
    templateUrl: 'recipe_book.item.html'
})

export class RecipeBookItemComponent implements OnInit {
    @Input() recipe: Recipe;

    constructor() {
    }

    ngOnInit() { }
}
