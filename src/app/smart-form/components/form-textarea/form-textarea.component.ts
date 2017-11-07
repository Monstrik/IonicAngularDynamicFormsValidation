import {Component} from '@angular/core';
import {FormGroup} from '@angular/forms';

import {Field} from '../../models/field.interface';
import {FieldConfig} from '../../models/field-config.interface';

@Component({
  selector: 'form-text',
  templateUrl: './form-textarea.component.html'
})
export class FormTextAreaComponent implements Field {
  config: FieldConfig;
  group: FormGroup;
}
