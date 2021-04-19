import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RecipesDetailComponent } from "./recipes/recipes-detail/recipes-detail.component";
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { RecipeResolverService } from "./recipes/recipe-resolver.service";
import { AuthComponent } from "./auth/auth.component";

const appRoutes: Routes = [
    {path: '', redirectTo: '/recipes', pathMatch: 'full'},
    {path: 'recipes', component: RecipesComponent, children: [
    {path: ':id', component: RecipesDetailComponent, resolve: [RecipeResolverService]},
    ]},
    {path: 'shopping-list', component: ShoppingListComponent },
    {path: 'auth', component: AuthComponent}    
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingMoudle {
}