import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeBookItemComponent } from './components/recipe_book/recipe_book_item/recipe_book.item';
import { RecipeBookDetailComponent } from './components/recipe_book/recipe_book-detail/recipe_book.detail';
import { RecipeBookListComponent } from './components/recipe_book/recipe_book-list/recipe_book.list';
import { ShoppingListEditComponent } from './components/shopping_list/shopping_list.edit/shopping_list.edit';
import { ShoppingListViewComponent } from './components/shopping_list/shopping_list.listView/shopping_list.listView';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule } from '@angular/forms';
import { ShoppingListComponent } from './components/shopping_list/shopping-list/shopping-list.component';
import { DropdownDirective } from './components/shared/dropdown.directive';

@NgModule({
  declarations: [
    AppComponent,
    RecipeBookItemComponent,
    RecipeBookDetailComponent,
    RecipeBookListComponent,
    ShoppingListEditComponent,
    ShoppingListViewComponent,
    HeaderComponent,
    ShoppingListComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
