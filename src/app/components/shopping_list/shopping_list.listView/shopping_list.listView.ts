import { Component, OnInit } from '@angular/core';
import {  Ingredient } from '../../../models/ingredient.model';

@Component({
    selector: 'app-shopping-list-listview',
    templateUrl: 'shopping_list.listView.html'
})

export class ShoppingListViewComponent implements OnInit {
    ingredients: Ingredient[] = [
        new Ingredient('Avacados', 2),
        new Ingredient('Tomatoes', 5)
    ];
    constructor() { }

    ngOnInit() { }
}
