import {Component} from '@angular/core';
import {FormGroup} from '@angular/forms';

import {Field} from '../../models/field.interface';
import {FieldConfig} from '../../models/field-config.interface';

@Component({
  selector: 'form-segment-button',
  templateUrl: 'form-segment-button.component.html',
  // styleUrls: '/home/alex/cems/cemsApp/src/app/smart-form/components/form-segment-button/form-segment-button.component.ts'
})
export class FormSegmentButtonComponent implements Field {
  config: FieldConfig;
  group: FormGroup;
}
