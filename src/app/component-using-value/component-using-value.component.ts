import { Component, Host, Inject, Optional } from '@angular/core';
import { VALUE_PROVIDER } from './directive-providing-value.directive';

@Component({
  selector: 'app-component-using-value',
  templateUrl: './component-using-value.component.html',
  styleUrl: './component-using-value.component.scss',
})
export class ComponentUsingValueComponent {
  constructor(@Optional() @Host() @Inject(VALUE_PROVIDER) value: any) {
    console.log('value', value);
  }
}
