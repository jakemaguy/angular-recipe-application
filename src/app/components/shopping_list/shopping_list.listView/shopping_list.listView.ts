import { Component, OnInit, Input } from '@angular/core';
import {  Ingredient } from '../../../models/ingredient.model';

@Component({
    selector: 'app-shopping-list-listview',
    templateUrl: 'shopping_list.listView.html'
})

export class ShoppingListViewComponent implements OnInit {
    @Input() ingredient: Ingredient;

    constructor() { }

    ngOnInit() { }
}
