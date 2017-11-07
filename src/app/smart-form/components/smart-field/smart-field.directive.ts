import {
  ComponentFactoryResolver,
  ComponentRef,
  Directive,
  Input,
  OnChanges,
  OnInit,
  Type,
  ViewContainerRef
} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormTextComponent} from '../form-text/form-text.component';
import {FormTimeComponent} from '../form-time/form-time.component';
import {FormDateComponent} from '../form-date/form-date.component';
import {FormButtonComponent} from '../form-button/form-button.component';
import {FormInputComponent} from '../form-input/form-input.component';
import {FormTextAreaComponent} from '../form-textarea/form-textarea.component';
import {FormSelectComponent} from '../form-select/form-select.component';
import {FormSplitterComponent} from '../form-splitter/form-splitter.component';
import {FormRadioCmponent} from '../form-radio/form-radio.component';
import {FormToggleComponent} from '../form-toggle/form-toggle.component';
import {FormUnsetToggleComponent} from '../form-unset-toggle/form-unset-toggle.component';
import {FormLabelComponent} from '../form-label/form-label.component';
import {FormSegmentButtonComponent} from '../form-segment-button/form-segment-button.component';

import {Field} from '../../models/field.interface';
import {FieldConfig} from '../../models/field-config.interface';

const components: { [type: string]: Type<Field> } = {
  utoggle: FormUnsetToggleComponent,
  toggle: FormToggleComponent,
  text: FormTextComponent,
  time: FormTimeComponent,
  date: FormDateComponent,
  button: FormButtonComponent,
  // input: FormInputComponent,
  textarea: FormTextAreaComponent,
  select: FormSelectComponent,
  splitter: FormSplitterComponent,
  radio: FormRadioCmponent,
  label: FormLabelComponent,
  segment: FormSegmentButtonComponent,

};



@Directive({
  selector: '[smartField]'
})
export class SmartFieldDirective implements Field, OnChanges, OnInit {
  @Input()
  config: FieldConfig;

  @Input()
  group: FormGroup;

  component: ComponentRef<Field>;

  constructor(private resolver: ComponentFactoryResolver,
              private container: ViewContainerRef) {
  }

  ngOnChanges() {
    if (this.component) {
      this.component.instance.config = this.config;
      this.component.instance.group = this.group;
    }
  }

  ngOnInit() {
    if (!components[this.config.type]) {
      const supportedTypes = Object.keys(components).join(', ');
      const msg = `Trying to use an unsupported type 
        ${this.config.type}, for control name ${this.config.name}. Supported types: ${supportedTypes}`;
      // TODO last dev stage : throw new Error(msg);
      return console.log('Error:', msg);
    }
    const component = this.resolver.resolveComponentFactory<Field>(components[this.config.type]);
    this.component = this.container.createComponent(component);
    this.component.instance.config = this.config;
    this.component.instance.group = this.group;
  }
}
