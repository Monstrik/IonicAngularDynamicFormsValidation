import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from 'ionic-angular';
import {ReactiveFormsModule} from '@angular/forms';


import {SmartFormComponent} from './containers/smart-form.component';
import {SmartFieldDirective} from './components/smart-field/smart-field.directive';

import {FormSplitterComponent} from './components/form-splitter/form-splitter.component';

import {FormTextComponent} from './components/form-text/form-text.component';
import {FormTimeComponent} from './components/form-time/form-time.component';
import {FormDateComponent} from './components/form-date/form-date.component';
import {FormButtonComponent} from './components/form-button/form-button.component';
import {FormInputComponent} from './components/form-input/form-input.component';
import {FormTextAreaComponent} from './components/form-textarea/form-textarea.component';
import {FormRadioCmponent} from './components/form-radio/form-radio.component';
import {FormSelectComponent} from './components/form-select/form-select.component';
import {FormToggleComponent} from './components/form-toggle/form-toggle.component';
import {FormUnsetToggleComponent} from './components/form-unset-toggle/form-unset-toggle.component';
import {FormLabelComponent} from './components/form-label/form-label.component';
import {FormSegmentButtonComponent} from './components/form-segment-button/form-segment-button.component';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    // IonicModule.forRoot(SmartFormComponent),
    IonicModule
  ],
  declarations: [
    SmartFieldDirective,
    SmartFormComponent,
    FormSplitterComponent,
    FormTextComponent,
    FormTimeComponent,
    FormDateComponent,
    FormButtonComponent,
    FormInputComponent,
    FormTextAreaComponent,
    FormSelectComponent,
    FormRadioCmponent,
    FormToggleComponent,
    FormUnsetToggleComponent,
    FormLabelComponent,
    FormSegmentButtonComponent
  ],
  exports: [
    SmartFormComponent
  ],
  entryComponents: [
    FormSplitterComponent,
    FormTextComponent,
    FormTimeComponent,
    FormDateComponent,
    FormButtonComponent,
    FormInputComponent,
    FormTextAreaComponent,
    FormSelectComponent,
    FormRadioCmponent,
    FormToggleComponent,
    FormUnsetToggleComponent,
    FormLabelComponent,
    FormSegmentButtonComponent
  ]
})
export class SmartFormModule {
}
