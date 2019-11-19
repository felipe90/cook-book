import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild
  } from '@angular/core';
import { Ingredient } from 'src/app/shared/model/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {

  selectedIngredient: Ingredient;

  @ViewChild('nameInput', { static: false }) nameInputRef: ElementRef;
  @ViewChild('amountInput', { static: false }) amountInputRef: ElementRef;

  @Output() ingredientAdded = new EventEmitter<Ingredient>();


  constructor() { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    // this.nameInputRef.nativeElement.value = this.ingredient.name;
    // this.amountInputRef.nativeElement.value = this.ingredient.amount;
  }

  /**
   * onAddItem()
   */
  public onAddItem() {
    const ingredient = new Ingredient(
      this.nameInputRef.nativeElement.value,
      this.amountInputRef.nativeElement.value
    );
    this.ingredientAdded.emit(ingredient);
  }

  /**
   * onDeleteItem
   */
  public onDeleteItem() {

  }

  /**
   * onClear
   */
  public onClear() {
    this.nameInputRef.nativeElement.value = '';
    this.amountInputRef.nativeElement.value = '';
  }
}
