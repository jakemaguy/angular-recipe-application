import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../../models/recipe.model';

@Component({
    selector: 'app-recipe-book-list',
    templateUrl: 'recipe_book.list.html'
})

export class RecipeBookListComponent implements OnInit {
    recipes: Recipe[] = [
        new Recipe('Chicken Parmesan',
        'Tender Pan Fried Chicken Breasts topped with tomato sauce.',
        'https://www.cookingclassy.com/wp-content/uploads/2013/02/chicken-parmesan-16.jpg'),

        new Recipe('Buffalo Mac And Cheese',
        'Delicious Buf mac.  Perfect for any party.',
        'https://spicysouthernkitchen.com/wp-content/uploads/Buffalo-Chicken-Mac-and-Cheese-8.jpg')
    ];

    selectedRecipe = this.recipes[0];  // need to fix case where theres no recipe items

    constructor() {
    }

    ngOnInit() { }

}
