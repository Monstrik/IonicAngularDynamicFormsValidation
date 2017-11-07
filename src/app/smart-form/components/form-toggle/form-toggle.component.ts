import {Component, OnChanges, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

import {Field} from '../../models/field.interface';
import {FieldConfig} from '../../models/field-config.interface';

@Component({
  selector: 'form-toggle',
  templateUrl: './form-toggle.component.html',
  // styleUrls: ['form-toggle.component.scss']
})
export class FormToggleComponent implements Field {//, OnChanges, OnInit
  config: FieldConfig;
  group: FormGroup;

  // ngOnInit() {
  //   console.log('FormToggleComponent ngOnInit')
  //   // this.group.valueChanges
  //   //   .debounceTime(400)
  //   //   .distinctUntilChanged()
  //   //   .subscribe((ch) => {
  //   //     console.log('FormToggleComponent subscribe changes', ch)
  //   //     console.log('FormToggleComponent subscribe this.group.value', this.group.value)
  //   //   });
  //
  //   this.group.get(this.config.name).valueChanges
  //     .subscribe(val => {
  //       console.log('FormToggleComponent valueChanges.subscribe', val)
  //       this.config.value = !val;
  //     });
  // }

}
