import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Recipe } from 'src/app/domain/models/recipe/recipe';

export interface TimeList{
  name?: string;
  time?: number;
  medida_t?: string;
}

export interface IngredientsList{
  name?: string
  quantity?: number
  measure?: string
}

export interface InstructionsList{
  position?: number
  description?: string
}

export interface RecipeInfo{
  name?: string
  image?: string
}



@Component({
  selector: 'app-layer',
  templateUrl: './layer.component.html',
  styleUrls: ['./layer.component.css']
})
export class LayerComponent implements OnInit {
  recipeId = ""
  tecnicas = [
    { path: '../../../../assets/image 10.png' },
    { path: '../../../../assets/image 10.png' },
    { path: '../../../../assets/image 10.png' },
  ]

  recipes: RecipeInfo[] = []
  recipe: Recipe={}
  times: TimeList[] = []

  timer:number=0


  ingredients: IngredientsList[] = []

  instructions: InstructionsList [] = []
  dataSource=new MatTableDataSource<any>([])
  dataSource1=new MatTableDataSource<any>([])
  displayedColumns: string[] = ['ingrediente', 'cantidad', 'medida'];
  displayedColumns2: string[] = ['posicion', 'descripcion'];

  @ViewChild(MatPaginator) paginator?: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator!;
  }

  constructor(
    //private recipeService: RecipeService,
    //private timesService: TimesService,
    //private ingredientsService: IngredientsService,
    //private instructionsService: InstructionsService,
    private router: ActivatedRoute
  ) { }

  fetchRecipe(){
    /* this.recipeService.getRecipeById(this.recipeId).subscribe(
      result => {
        this.recipe=result
      }
    ) */
  }

  fetchIngredientsRecipe(){
    /* this.ingredientsService.getIngredientsByRecipe(this.recipeId).subscribe(
      result => {
        this.ingredients = []
        result.forEach(x => {
          var auxIngredients: IngredientsList = {}
          auxIngredients.name = x.alias
          auxIngredients.quantity = x.quantity
          auxIngredients.measure = x.measure
          this.ingredients.push(auxIngredients)

        })
        this.dataSource.data=this.ingredients
      },
      err=>{
        console.log(err)
      },
      ()=>{
        console.log('completado')
      }
    ) */
  }

  fetchInstructionsRecipe(){
    /* this.instructionsService.getInstructionByRecipe(this.recipeId).subscribe(
      result => {
        this.instructions = []
        result.forEach(x => {
          var auxInstructions: InstructionsList = {}
          auxInstructions.position = x.position
          auxInstructions.description = x.description
          this.instructions.push(auxInstructions)
        })
        var aux = this.instructions.slice()
        aux.forEach(x=>{
          this.instructions[x.position!-1]=x
        })
        this.dataSource1.data=this.instructions

      }
    ) */
  }

  fetchRTimesRecipe(){
   /*  this.timesService.getTimesByRecipe(this.recipeId).subscribe(
      result => {
        this.times = []
        result.forEach(x => {
          var auxTimes: TimeList = {}
          auxTimes.name = x.name
          auxTimes.time = x.total
          auxTimes.medida_t = x.measure
          this.times.push(auxTimes)
        })
      }
    ) */
  }

  startTimer(){

  }
  endTimer(){

  }

  loadTime(time:number, measure:string){
    if(measure === "Minutos"){
      this.timer = time * 60
    }
    if(measure === "Segundos"){
      this.timer = time
    }
    if(measure === "Horas"){
      this.timer = time * 3600
    }
    if(measure === "Dias"){
      this.timer = time * 86400
    }
    console.log(measure)
  }

  ngOnInit(): void {
    this.router.params.subscribe((params:  Params) => {       this.recipeId = params["id"]   });
    this.fetchRecipe();
    this.fetchRTimesRecipe();
    this.fetchInstructionsRecipe();
    this.fetchIngredientsRecipe();
  }


}
