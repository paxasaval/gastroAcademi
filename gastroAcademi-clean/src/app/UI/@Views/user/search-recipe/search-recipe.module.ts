import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchRecipeRoutingModule } from './search-recipe-routing.module';
import { LayerComponent } from './layer/layer.component';
import { RecipeCardComponent } from './components/recipe-card/recipe-card.component';
import { MaterialModule } from 'src/app/UI/shared/material/material/material.module';


@NgModule({
  declarations: [
    LayerComponent,
    RecipeCardComponent
  ],
  imports: [
    CommonModule,
    SearchRecipeRoutingModule,
    MaterialModule
  ]
})
export class SearchRecipeModule { }
