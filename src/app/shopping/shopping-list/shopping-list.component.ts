import {
  Component,
  EventEmitter,
  OnInit,
  Output
  } from '@angular/core';
import { Ingredient } from 'src/app/shared/model/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  ingredient: Ingredient;

  @Output() ingredientSelected = new EventEmitter<Ingredient>();

  public ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Oranges', 10),
    new Ingredient('Grapes', 1)
  ];

  constructor() { }

  ngOnInit() {
  }

  /**
   * onIngredientAdded
   */
  public onIngredientAdded(newIngredient: Ingredient) {
    this.ingredients.push(newIngredient);
  }

  /**
   * selectItem(item)
   */
  public selectItem(item) {
    this.ingredientSelected.emit(item)
  }
}
