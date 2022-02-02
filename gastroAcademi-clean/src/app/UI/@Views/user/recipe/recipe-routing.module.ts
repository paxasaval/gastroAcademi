import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayerComponent } from './layer/layer.component';

const routes: Routes = [
  {
    path:'id/:id',
    component: LayerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipeRoutingModule {}
