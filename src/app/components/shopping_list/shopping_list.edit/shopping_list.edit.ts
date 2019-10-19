import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../../models/ingredient.model';
import { ShoppingListService } from '../../../services/shopping-list.service';

@Component({
    selector: 'app-shopping-list-edit',
    templateUrl: 'shopping_list.edit.html'
})

export class ShoppingListEditComponent implements OnInit {
    @ViewChild('nameInput', {static: true}) nameInput: ElementRef;
    @ViewChild('amountInput', {static: true}) amountInput: ElementRef;

    constructor(private shoppingList: ShoppingListService) { }

    ngOnInit() { }

    onAddClick() {
        this.shoppingList.addIngredient(
            new Ingredient(
                this.nameInput.nativeElement.value,
                this.amountInput.nativeElement.value)
        );
    }
}
