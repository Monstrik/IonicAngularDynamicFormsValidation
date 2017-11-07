import {Component} from '@angular/core';
import {FormGroup} from '@angular/forms';

import {Field} from '../../models/field.interface';
import {FieldConfig} from '../../models/field-config.interface';

@Component({
  selector: 'form-time',
  templateUrl: './form-time.component.html'
})
export class FormTimeComponent implements Field {
  config: FieldConfig;
  group: FormGroup;


  static getNowTime() {
    const time = new Date();
    return ((time.getHours() < 10) ? "0" : "") + time.getHours() + ":" + ((time.getMinutes() < 10) ? "0" : "") + time.getMinutes();
  }

  setNowTime() {
    // console.log('setNowTime invoked');
    this.group.controls[this.config.name].setValue(FormTimeComponent.getNowTime());
  }
}
