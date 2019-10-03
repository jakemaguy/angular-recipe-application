import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'app-shopping-list-edit',
    templateUrl: 'shopping_list.edit.html'
})

export class ShoppingListEditComponent implements OnInit {
    @ViewChild('nameInput', {static: true}) nameInput: ElementRef;
    @ViewChild('amountInput', {static: true}) amountInput: ElementRef;

    constructor() { }

    ngOnInit() { }
}
