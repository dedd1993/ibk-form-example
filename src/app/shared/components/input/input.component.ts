import { Component, OnInit, forwardRef, Input, ViewChild, ElementRef, AfterViewInit, Inject } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
       provide: NG_VALUE_ACCESSOR,
       useExisting: forwardRef(() => InputComponent),
       multi: true
    }
  ]
})
export class InputComponent implements AfterViewInit,  ControlValueAccessor {
  @ViewChild('inputElemt', { static: false }) inputElemt: ElementRef;
  @Input() label;
  elementRef: ElementRef;

  /**
   * Holds the current value of the slider
   */
  value = 0;

  /**
   * Invoked when the model has been changed
   */
  onChange: (_: any) => void = (_: any) => {};

  /**
   * Invoked when the model has been touched
   */
  onTouched: () => void = () => {};

  constructor(@Inject(ElementRef) elementRef: ElementRef) {
    this.elementRef = elementRef;
  }

  ngAfterViewInit() {
    setTimeout(() => {
      const nativeInput = this.inputElemt.nativeElement.childNodes[0].childNodes[0];
      console.log(nativeInput);
      this.inputElemt.nativeElement.inputLabel = this.label;
    }, 500);
  }

  onIbkInputChange(e) {
    this.value = e;
    this.updateChanges();
  }

  /**
   * Method that is invoked on an update of a model.
   */
  updateChanges() {
      this.onChange(this.value);
  }

  ///////////////
  // OVERRIDES //
  ///////////////

  /**
   * Writes a new item to the element.
   * @param value the value
   */
  writeValue(value: number): void {
    console.log('value', value);
    this.value = value;
    this.updateChanges();
    setTimeout(() => {
      // const nativeInput = this.inputElemt.nativeElement.childNodes[0].childNodes[0];
      this.inputElemt.nativeElement.value = value;
    }, 100);
  }

  /**
   * Registers a callback function that should be called when the control's value changes in the UI.
   * @param fn --
   */
  registerOnChange(fn: any): void {
      this.onChange = fn;
  }

  /**
   * Registers a callback function that should be called when the control receives a blur event.
   * @param fn --
   */
  registerOnTouched(fn: any): void {
      this.onTouched = fn;
  }

}
