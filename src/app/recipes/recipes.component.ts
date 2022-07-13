import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  recipes: Recipe[] =[
    new Recipe('A Test Recipe', 'This is simply test','https://get.pxhere.com/photo/dish-food-cuisine-ingredient-appetizer-produce-vegetarian-food-finger-food-recipe-la-carte-food-hors-d-oeuvre-side-dish-canape-meal-ceviche-thai-food-garnish-fattoush-bruschetta-1558645.jpg')
  ];
  selectedRecipes!:Recipe;

  constructor() { }

  ngOnInit(): void {
  }

}
