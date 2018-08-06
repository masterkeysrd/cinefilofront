import {Component, EventEmitter, forwardRef, Input, OnInit, Output} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-form-input-dropdown',
  templateUrl: './form-input-dropdown.component.html',
  styleUrls: ['./form-input-dropdown.component.css'],
  providers: [
    {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => FormInputDropdownComponent),
    multi: true
  }
  ]
})
export class FormInputDropdownComponent implements ControlValueAccessor {

  @Input() list: any[];
  @Input() name: string;
  @Input() searchable: boolean;
  @Output() onCompareEvent: EventEmitter<any> = new EventEmitter<any>();
  @Input() disabled: boolean;

  private innerValue: any;
  private changed = new Array<(value: any) => void>();
  private touched = new Array<() => void>();

  constructor() { }

  get value(): any {
    return this.innerValue;
  }

  set value(value: any) {
    if (this.innerValue !== value) {
      this.innerValue = value;
      this.changed.forEach(f => f(value));
    }
  }

  writeValue(value: any) {
    this.innerValue = value;
  }

  touch() {
    this.touched.forEach(f => f());
  }

  registerOnChange(fn: (value: any) => void) {
    this.changed.push(fn);
  }

  registerOnTouched(fn: () => void) {
    this.touched.push(fn);
  }

  setDisabledState(isDisabled: boolean): void {
  }

  byId(item1: any, item2: any) {
    return item1.id === item2.id;
  }

}
