import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterState, RouterStateSnapshot } from '@angular/router';
import { from } from 'rxjs';

import { Recipe } from './recipe.model';
import { RecipeService } from './recipes.service';

@Injectable({providedIn: 'root'})
export class RecipeResolverService implements Resolve<Recipe>{

    constructor(private recipeService: RecipeService) {

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Recipe {
        const id = route.params['id'];
        return this.recipeService.getRecipe(id);
    }
}