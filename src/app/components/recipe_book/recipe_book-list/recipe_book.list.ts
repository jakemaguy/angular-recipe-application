import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-recipe-book-list',
    templateUrl: 'recipe_book.list.html'
})

export class RecipeBookListComponent implements OnInit {
    recipes = [
        'Chicken Parm',
        'Ceasar Salad',
        'Filet Mignon',
        'Lasagna'
    ];
    constructor() { }

    ngOnInit() { }
}