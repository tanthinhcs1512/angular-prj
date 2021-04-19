import { Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from '../Ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  @ViewChild('f') formRef: NgForm;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  subsription: Subscription;
  editMode: boolean = false;
  editIndexNumber: number;
  editedItem: Ingredient;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.subsription = this.shoppingListService.startedEditing.subscribe((index: number) => {
        this.editIndexNumber = index;
        this.editMode = true;
        this.editedItem = this.shoppingListService.getIngredientByIndex(index);
        this.formRef.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        });
    });
  }

  onAddItem(f: NgForm) {
    const infor = f.value;
    const ingName = infor.name;
    const ingAmount = infor.amount;
    const newIngredient = new Ingredient(ingName, ingAmount);
    if (this.editMode) {
      this.shoppingListService.updateIngredient(this.editIndexNumber, newIngredient)
    } else {
      this.ingredientAdded.emit(newIngredient);
    }
    this.editMode = false;
    this.formRef.reset();
  }

  onDelete() {
    this.shoppingListService.deleteIngredient(this.editIndexNumber);
    this.onClear();
  }

  onClear() {
    this.formRef.reset();
    this.editMode = false;
  }

  ngOnDestroy() {
    this.subsription.unsubscribe();
  }

}
