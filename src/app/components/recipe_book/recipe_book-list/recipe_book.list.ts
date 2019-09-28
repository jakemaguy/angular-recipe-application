import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../../models/recipe.model';

@Component({
    selector: 'app-recipe-book-list',
    templateUrl: 'recipe_book.list.html'
})

export class RecipeBookListComponent implements OnInit {
    recipes: Recipe[] = [
        new Recipe('Chicken Parmesan',
        'Tender Pan Fried Chicken Breasts topped with tomato sauce.',
        'https://www.cookingclassy.com/wp-content/uploads/2013/02/chicken-parmesan-16.jpg')
    ];

    constructor() { }

    ngOnInit() { }
}