import { HttpClientModule } from '@angular/common/http';
import { TimesService } from './infraestructure/driven-adapter/recipe/times.service';
import { TimesGetaway } from 'src/app/domain/models/recipe/gateway/times-getaway';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { RecipeGetaway } from './domain/models/recipe/gateway/recipe-getaway';
import { RecipeService } from './infraestructure/driven-adapter/recipe/recipe.service';
import { AngularFireModule, FirebaseApp } from '@angular/fire/compat';
import { IngredientsGetaway } from './domain/models/recipe/gateway/ingredients-getaway';
import { IngredientService } from './infraestructure/driven-adapter/recipe/ingredient.service';
import { IngRecipeGetaway } from './domain/models/recipe/gateway/ingRecipe-getaway';
import { IngRecipeService } from './infraestructure/driven-adapter/recipe/ing-recipe.service';
import { InstructionsGetaway } from './domain/models/recipe/gateway/instructions-getaway';
import { InstructionsService } from './infraestructure/driven-adapter/recipe/instructions.service';
import { TechniquesGetaway } from './domain/models/recipe/gateway/techniques-getaway';
import { TechniquesService } from './infraestructure/driven-adapter/recipe/techniques.service';
import { TechRecipeGetaway } from './domain/models/recipe/gateway/techRecipe-getaway';
import { TechniquesRecipeService } from './infraestructure/driven-adapter/recipe/techniques-recipe.service';
import { TypesGetaway } from './domain/models/recipe/gateway/types-getaway';
import { TypesService } from './infraestructure/driven-adapter/recipe/types.service';
import { CategoryGetaway } from './domain/models/recipe/gateway/categorys-getaway';
import { CategoryService } from './infraestructure/driven-adapter/recipe/category.service';
import { RecipemicroNodeService } from './infraestructure/driven-adapter/recipe/recipemicroNode.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage())
  ],
  providers: [
    {provide: RecipeGetaway, useClass: RecipemicroNodeService},
    {provide: IngredientsGetaway, useClass: IngredientService},
    {provide: IngRecipeGetaway, useClass: IngRecipeService},
    {provide: InstructionsGetaway, useClass: InstructionsService},
    {provide: TechniquesGetaway, useClass: TechniquesService},
    {provide: TechRecipeGetaway, useClass: TechniquesRecipeService},
    {provide: TypesGetaway, useClass: TypesService},
    {provide: CategoryGetaway, useClass: CategoryService},
    {provide: TimesGetaway, useClass: TimesService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
