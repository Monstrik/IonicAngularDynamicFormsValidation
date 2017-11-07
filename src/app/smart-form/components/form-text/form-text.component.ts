import {Component} from '@angular/core';
import {FormGroup,Validators,ValidatorFn} from '@angular/forms';

import {Field} from '../../models/field.interface';
import {FieldConfig} from '../../models/field-config.interface';

@Component({
  selector: 'form-text',
  templateUrl: './form-text.component.html'
})
export class FormTextComponent implements Field {
  config: FieldConfig;
  group: FormGroup;
}
