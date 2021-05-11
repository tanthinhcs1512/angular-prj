import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

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


  @HostListener("keydown", ['$event', '$event.keycode'])
  onKeyDown($event: KeyboardEvent, keycode: any) {
    if (keycode != this.TAB) {
      $event.preventDefault();
    } 
    const key = String.fromCharCode(keycode);
    const cursorPos = this.input.selectionStart || 0;
    this.overWriteChatAtPosition(this.input, cursorPos, key);
  }


  buildPlaceHolder(): string {
    let value = '';
    const chars = this.mask.split('');
    value = chars.reduce((result, char) => {
      return result += this.includes(this.SPECIAL_CHARACTERS, char) ? char : '_'
    }, '') 
    return value;
  }


  includes(arr: string[], char: any): boolean {
    const exist = arr.find(e => e === char);
    if (!exist)
      return false;
    return true;
  }

  overWriteChatAtPosition(input: HTMLInputElement, position: number, key: string) {
    const currentValue = input.value;
    this.input.value = currentValue.slice(0, position) + key + currentValue.slice(position + 1);
  }

}
