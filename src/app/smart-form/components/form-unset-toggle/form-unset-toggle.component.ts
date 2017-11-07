import {Component} from '@angular/core';
import {FormGroup} from '@angular/forms';

import {Field} from '../../models/field.interface';
import {FieldConfig} from '../../models/field-config.interface';

@Component({
  selector: 'form-unset-toggle',
  templateUrl: './form-unset-toggle.component.html'
})
export class FormUnsetToggleComponent implements Field {
  config: FieldConfig;
  group: FormGroup;
}
