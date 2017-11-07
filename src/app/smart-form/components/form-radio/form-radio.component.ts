import {Component} from '@angular/core';
import {FormGroup} from '@angular/forms';

import {Field} from '../../models/field.interface';
import {FieldConfig} from '../../models/field-config.interface';

@Component({
  selector: 'form-select',
  templateUrl:'form-radio.component.html'
})
export class FormRadioCmponent implements Field {
  config: FieldConfig;
  group: FormGroup;
}
