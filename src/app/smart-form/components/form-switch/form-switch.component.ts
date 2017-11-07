import {Component} from '@angular/core';
import {FormGroup} from '@angular/forms';

import {Field} from '../../models/field.interface';
import {FieldConfig} from '../../models/field-config.interface';

@Component({
  selector: 'form-switch',
  templateUrl:'form-switch.component.html'
})
export class FormSwitchComponent implements Field {

  config: FieldConfig;
  group: FormGroup;
  selected=1;

  select = function (id) {
    this.selected = id;
  }
}
