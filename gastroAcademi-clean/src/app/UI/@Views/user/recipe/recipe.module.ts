import { RecipeRoutingModule } from './recipe-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayerComponent } from './layer/layer.component';
import { MaterialModule } from 'src/app/UI/shared/material/material/material.module';



@NgModule({
  declarations: [
    LayerComponent
  ],
  imports: [
    CommonModule,
    RecipeRoutingModule,
    MaterialModule
  ]
})
export class RecipeModule { }
