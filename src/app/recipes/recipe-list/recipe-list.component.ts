import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'Recipe for tests', 'https://cdn.pixabay.com/photo/2017/11/08/15/34/recipe-2930786_960_720.jpg')
    new Recipe('Other Test Recipe', 'Recipe for tests 2', 'https://cdn.pixabay.com/photo/2017/11/08/15/34/recipe-2930786_960_720.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
