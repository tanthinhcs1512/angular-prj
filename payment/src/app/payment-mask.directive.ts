import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

import * as _ from 'lodash';
import {maskDigitValidations, neverValidator} from "./digit-validation";

@Directive({
  selector: '[payment-mask]'
})
export class PaymentMaskDirective implements OnInit {

  TAB: number = 9;
  LEFT_ARROW: number = 37;
  RIGHT_ARROW: number = 39;
  BACKSPACE: number = 8;
  DELETE: number = 46;

  SPECIAL_CHARACTERS: string[] = [" ", "/", "(", ")", "+", "\/", "-"];
  
  @Input('payment-mask')
  mask='';

  input: HTMLInputElement;

  constructor(el: ElementRef) {
    this.input = el.nativeElement;
  }

  ngOnInit() {
    this.input.value = this.buildPlaceHolder();
  }


  @HostListener("keydown", ['$event', '$event.keyCode'])
  onKeyDown($event: KeyboardEvent, keyCode: any) {

    if (keyCode != this.TAB) {
      $event.preventDefault();
    } 
    const key = String.fromCharCode(keyCode);
    const cursorPos = this.input.selectionStart || 0;

    switch(keyCode) {

      case this.LEFT_ARROW:
        this.handleLeftArrow(cursorPos);
        return;
      case this.RIGHT_ARROW:
        this.handleRightArrow(cursorPos);
        return;
      case this.BACKSPACE:
        this.handleBackspace(cursorPos);
        return;
      case this.DELETE:
        this.handleDelete(cursorPos);
        return;

    }
    const maskDigit = this.mask.charAt(cursorPos),
      digitValidator = maskDigitValidations[maskDigit] || neverValidator;

    if (digitValidator(key)) {
      this.overWriteChatAtPosition(this.input, cursorPos, key);
      this.handleRightArrow(cursorPos);
    } 
  }


  buildPlaceHolder(): string {
    let value = '';
    const chars = this.mask.split('');
    value = chars.reduce((result, char) => {
      return result += _.includes(this.SPECIAL_CHARACTERS, char) ? char : '_'
    }, '') 
    return value;
  }

  overWriteChatAtPosition(input: HTMLInputElement, position: number, key: string) {
    const currentValue = input.value;
    this.input.value = currentValue.slice(0, position) + key + currentValue.slice(position + 1);
  }

  calculatePreviousCursorPos(cursorPos: any) {
    const valueBeforeCursor = this.input.value.slice(0, cursorPos);

    return  _.findLastIndex(valueBeforeCursor,
        char => ! _.includes(this.SPECIAL_CHARACTERS, char) );
  }
  

  handleLeftArrow(cursorPos: any) {

    const previousPos = this.calculatePreviousCursorPos(cursorPos);

    if (previousPos >= 0) {
        this.input.setSelectionRange(previousPos, previousPos);
    }
  }

  handleRightArrow(cursorPos: any) {
    const valueAfterCursor = this.input.value.slice(cursorPos + 1);

    const nextPos =
        _.findIndex(valueAfterCursor, char => !_.includes(this.SPECIAL_CHARACTERS, char));

    if (nextPos >= 0) {

        const newCursorPos = cursorPos + nextPos + 1;

        this.input.setSelectionRange(newCursorPos, newCursorPos);
    }
  }

  handleBackspace(cursorPos: any) {

    const previousPos = this.calculatePreviousCursorPos(cursorPos);

    if (previousPos >= 0) {
        this.overWriteChatAtPosition(this.input, previousPos, '_');
        this.input.setSelectionRange(previousPos, previousPos);
    }
  }

  handleDelete(cursorPos: any) {
    this.overWriteChatAtPosition(this.input, cursorPos, '_');
    this.input.setSelectionRange(cursorPos, cursorPos);
  }
}
