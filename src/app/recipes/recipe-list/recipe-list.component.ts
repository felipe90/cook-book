import { Component, OnInit } from '@angular/core';
import { Recipe } from '../model/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  public selectedRecipe: Recipe;

  public recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://pbs.twimg.com/profile_images/529682367170899968/lffGtykQ.png'),
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://pbs.twimg.com/profile_images/529682367170899968/lffGtykQ.png'),
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://pbs.twimg.com/profile_images/529682367170899968/lffGtykQ.png'),
  ];

  public newRecipe: Recipe = new Recipe('', '', '');

  public submitted = false;


  constructor() { }

  /**
   * LoadRecipeDetail
   */
  public LoadRecipeDetail(recipe: Recipe) {
    this.selectedRecipe = recipe;
  }

  ngOnInit() {
  }

  public onSubmit() {
    this.submitted = true;
    this.addNewRecipe();
  }

  public addNewRecipe() {
    this.recipes.unshift(this.newRecipe);
    this.newRecipe = new Recipe('', '', '');
  }

}
