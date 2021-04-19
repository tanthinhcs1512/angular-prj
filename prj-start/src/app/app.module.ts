import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipesListComponent } from './recipes/recipes-list/recipes-list.component';
import { RecipesDetailComponent } from './recipes/recipes-detail/recipes-detail.component';
import { RecipesItemComponent } from './recipes/recipes-list/recipes-item/recipes-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { DropdownDirective } from './shopping-list/dropdown.directive';
import { RecipeService } from './recipes/recipes.service';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { AppRoutingMoudle } from './app-routing.module';
import { RecipesEditComponent } from './recipes/recipes-edit/recipes-edit.component';
import { AuthComponent } from './auth/auth.component';
import { LoadingSprinnerComponent } from './loading-sprinner/loading-sprinner.component';

@NgModule({
  declarations: [
    AppComponent, 
    HeaderComponent, 
    RecipesComponent,
    RecipesListComponent,
    RecipesDetailComponent,
    RecipesItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent, 
    DropdownDirective, RecipesEditComponent, AuthComponent, LoadingSprinnerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingMoudle
  ],
  providers: [
    RecipeService,
    ShoppingListService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
