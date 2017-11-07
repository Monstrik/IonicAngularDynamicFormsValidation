import {Component} from '@angular/core';
import {FormGroup} from '@angular/forms';

import {Field} from '../../models/field.interface';
import {FieldConfig} from '../../models/field-config.interface';

@Component({
  selector: 'form-input',
  templateUrl: './form-label.component.html'
})
export class FormLabelComponent implements Field {
  config: FieldConfig;
  group: FormGroup;
}
