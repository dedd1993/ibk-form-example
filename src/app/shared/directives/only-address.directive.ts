import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appOnlyAddress]'
})
export class OnlyAddressDirective {

  constructor(private el: ElementRef) { }

  @HostListener('keydown', ['$event']) onkeydown(e) {
    if (
      // Allow: Delete, Backspace, Tab, Escape, Enter
      [46, 8, 9, 27, 13].indexOf(e.keyCode) !== -1 ||
      (e.keyCode === 65 && e.ctrlKey === true) || // Allow: Ctrl+A
      (e.keyCode === 67 && e.ctrlKey === true) || // Allow: Ctrl+C
      (e.keyCode === 86 && e.ctrlKey === true) || // Allow: Ctrl+V
      (e.keyCode === 88 && e.ctrlKey === true) || // Allow: Ctrl+X
      (e.keyCode === 65 && e.metaKey === true) || // Cmd+A (Mac)
      (e.keyCode === 67 && e.metaKey === true) || // Cmd+C (Mac)
      (e.keyCode === 86 && e.metaKey === true) || // Cmd+V (Mac)
      (e.keyCode === 88 && e.metaKey === true) || // Cmd+X (Mac)
      (e.keyCode >= 35 && e.keyCode <= 39) // Home, End, Left, Right
    ) {
      return;  // let it happen, don't do anything
    }

    if (
      (e.shiftKey || e.altKey || (e.keyCode < 48 || e.keyCode > 57))
      && (e.keyCode < 65 || e.keyCode > 90) // !numbers
      && (e.keyCode < 96 || e.keyCode > 105) // !letters
      && (e.keyCode !== 32) // !space
      && (e.shiftKey || e.altKey || e.keyCode !== 188) // !comma
      && (e.shiftKey || e.altKey || e.keyCode !== 190) // !point
    ) {
      e.preventDefault();
    }

  }

}
