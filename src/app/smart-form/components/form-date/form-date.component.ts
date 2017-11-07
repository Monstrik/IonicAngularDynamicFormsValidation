import {Component} from '@angular/core';
import {FormGroup} from '@angular/forms';

import {Field} from '../../models/field.interface';
import {FieldConfig} from '../../models/field-config.interface';

@Component({
  selector: 'form-date',
  templateUrl: './form-date.component.html'
})
export class FormDateComponent implements Field {
  config: FieldConfig;
  group: FormGroup;
}
