import {Component} from '@angular/core';
import {FormGroup} from '@angular/forms';

import {Field} from '../../models/field.interface';
import {FieldConfig} from '../../models/field-config.interface';

@Component({
  selector: 'form-splitter',
  templateUrl: './form-splitter.component.html'
})
export class FormSplitterComponent implements Field {
  config: FieldConfig;
  group: FormGroup;

  getClass() {
    return this.config.disabled ? 'headingLabelDisabled' : 'headingLabel';
  }
}
