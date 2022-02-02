import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'searchRecipe',
    loadChildren: ()=>import('./UI/@Views/user/search-recipe/search-recipe.module').then(m=>m.SearchRecipeModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
