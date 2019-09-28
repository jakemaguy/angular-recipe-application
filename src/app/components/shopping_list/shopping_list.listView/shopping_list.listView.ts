import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-shopping-list-listview',
    templateUrl: 'shopping_list.listView.html'
})

export class ShoppingListViewComponent implements OnInit {
    shoppingList = [
        'carrots',
        'lettuce',
        'avacados',
        'cheetos'
    ];
    constructor() { }

    ngOnInit() { }
}
