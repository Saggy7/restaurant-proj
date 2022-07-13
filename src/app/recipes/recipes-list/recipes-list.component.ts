import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();    recipes: Recipe[] =[
      new Recipe('A Test Recipe', 'This is simply test','https://get.pxhere.com/photo/dish-food-cuisine-ingredient-appetizer-produce-vegetarian-food-finger-food-recipe-la-carte-food-hors-d-oeuvre-side-dish-canape-meal-ceviche-thai-food-garnish-fattoush-bruschetta-1558645.jpg'),
      new Recipe('A Test Recipe', 'This is simply test','https://get.pxhere.com/photo/dish-food-cuisine-ingredient-appetizer-produce-vegetarian-food-finger-food-recipe-la-carte-food-hors-d-oeuvre-side-dish-canape-meal-ceviche-thai-food-garnish-fattoush-bruschetta-1558645.jpg')
    ];

  constructor() { }

  ngOnInit(): void {
  }
  onRecipeSelected(recipe:Recipe){
    this.recipeWasSelected.emit(recipe);

  }

}
