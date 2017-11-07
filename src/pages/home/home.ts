import {Component, ViewChild} from '@angular/core';

import {FieldConfig} from '../../app/smart-form/models/field-config.interface';
import {SmartFormComponent} from '../../app/smart-form/containers/smart-form.component';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild(SmartFormComponent) form1: SmartFormComponent;
  private dynFormSection: any;

  constructor() {
    this.dynFormSection = HomePage.createSection();
  }

  private static createSection() {
    const mockConfig: FieldConfig[] = [
      {
        type: 'text',
        label: 'Full name',
        name: 'name',
        placeholder: 'Enter your name',
        validators: [{'required': true}, {'minLength': 4}, {'maxLength': 8}]
      },
      {
        type: 'text',
        label: 'Address',
        name: 'adr',
        placeholder: 'Enter your Adress',
        validators: [{'required': true}, {'minLength': 4}, {'maxLength': 8}]
      },
      {
        type: 'select',
        label: 'Favourite',
        name: 'fav',
        options: [
          {id: '1', name: "Mark"},
          {id: '2', name: "Claire"},
          {id: '3', name: "Daniel"},
          {id: '4', name: "Gary"}
        ],
        placeholder: 'Select an option',
        validators: [{'required': true}]

      },
      {
        type: 'select',
        label: 'Favourite Group',
        multiple: true,
        name: 'favgroup',
        options: [
          {id: '1', name: "Mark"},
          {id: '2', name: "Claire"},
          {id: '3', name: "Daniel"},
          {id: '4', name: "Gary"}
        ],
        validators: [{'required': true}]
      }
    ];
    return {
      title: "Section Title",
      fields: mockConfig
    }
  }

  validate() {
    this.form1.validate();
    console.log(this.form1.value);
  }

  updateFromDynamicForm(newValue: any) {
    console.log(newValue)
  }
}
