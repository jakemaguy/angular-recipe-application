import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../../models/ingredient.model';

@Component({
    selector: 'app-shopping-list-edit',
    templateUrl: 'shopping_list.edit.html'
})

export class ShoppingListEditComponent implements OnInit {
    @ViewChild('nameInput', {static: true}) nameInput: ElementRef;
    @ViewChild('amountInput', {static: true}) amountInput: ElementRef;

    @Output() addIngredient = new EventEmitter<Ingredient>();

    constructor() { }

    ngOnInit() { }

    onAddClick() {
        this.addIngredient.emit(
            new Ingredient(
                this.nameInput.nativeElement.value,
                this.amountInput.nativeElement.value)
        );
    }
}
