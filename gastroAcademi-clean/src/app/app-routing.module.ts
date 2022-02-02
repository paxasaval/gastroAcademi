import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'searchRecipe'
  },
  {
    path:'searchRecipe',
    loadChildren: ()=>import('./UI/@Views/user/search-recipe/search-recipe.module').then(m=>m.SearchRecipeModule)
  },
  {
    path:'recipe',
    loadChildren: ()=>import('./UI/@Views/user/recipe/recipe.module').then(m=>m.RecipeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
