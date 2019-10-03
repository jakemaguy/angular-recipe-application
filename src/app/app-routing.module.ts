import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeBookListComponent } from './components/recipe_book/recipe_book-list/recipe_book.list';
import { ShoppingListComponent } from './components/shopping_list/shopping-list/shopping-list.component';


const routes: Routes = [
  { path: 'recipe-book', component: RecipeBookListComponent },
  { path: 'shopping-list', component: ShoppingListComponent },
  { path: '', pathMatch: 'full', redirectTo: 'shopping-list' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
