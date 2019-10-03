import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';


@Component({
    selector: 'app-recipe-book-detail',
    templateUrl: 'recipe_book.detail.html'
})

export class RecipeBookDetailComponent implements OnInit {
    @Input() recipe: Recipe;

    constructor() { }

    ngOnInit() {

    }
}
