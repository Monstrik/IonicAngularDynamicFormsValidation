import {
  Component,
  EventEmitter,
  KeyValueDiffers,
  Input,
  OnChanges,
  OnInit,
  DoCheck,
  Output
} from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators, ValidatorFn} from '@angular/forms';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';
// import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import {FieldConfig} from '../models/field-config.interface';
import {Toggle} from "ionic-angular";

@Component({
  exportAs: 'smartForm',
  selector: 'smart-form',
  templateUrl: 'smart-form.component.html'
})
export class SmartFormComponent implements OnChanges, OnInit, DoCheck {
  @Input()
  config: FieldConfig[] = [];

  @Input()
  columns: number = 1;

  @Input()
  selectAllTogglesButton: boolean = false;

  // @Input() validate: EventEmitter<any> = new EventEmitter<any>();
  // @Input('validateChild') private validateChild;
  // @Input() inputEvents: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  submit: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  valueUpdate: EventEmitter<any> = new EventEmitter<any>();

  form: FormGroup;

  selectAllTogglesButtonToggleValue: boolean;

  private _differ;

  get controls() {
    return this.config.filter(({type}) => type !== 'submit');
  }

  get changes() {
    return this.form.valueChanges;
  }

  get valid() {
    return true; //this.form.valid;
  }

  get value() {
    return this.form.value;
  }

  // validateSmartForm(): boolean {
  //   if (this.form.valid) {
  //     console.log('this.form.valid')
  //     return true;
  //   }
  //   return false;
  // }

  constructor(private fb: FormBuilder, private _differs: KeyValueDiffers,) {
  }

  getChangedControl(changedField, controls) {
    const changedControl = controls.find(config => {
      return config['name'] === changedField.name;
    });
    return changedControl;
  }


  getControlsToReset(changedControl, controls) {

    let returnValue: any[] = [];
    // console.log('SmartFormComponent getControlsToReset changedControl', controls);
    // console.log('SmartFormComponent getControlsToReset changedControl', changedControl);
    const subGroupId = changedControl['dbInfo']['MULTIID'];
    // console.log('SmartFormComponent applyRules subGroupId', subGroupId);
    let controlsFromSubGroup = controls.filter(config => {
      return config['dbInfo'] && config['dbInfo']['MULTIID'] === subGroupId && config.type !== 'splitter';
    });
    // console.log('SmartFormComponent getControlsToReset controlsFromSubGroup', controlsFromSubGroup);
    controlsFromSubGroup.forEach(control => {
      if (control.name != changedControl.name) {
        // console.log('control to change ', control);
        returnValue.push(control);
      }
    });
    // console.log('SmartFormComponent getControlsToReset returnValue', returnValue);
    return returnValue;
  }

  ngOnInit() {


    this.form = this.createGroup();
    console.log("ngOnInit this.form.value", this.form.value);

    this._differ = this._differs.find(this.value).create(null).diff(this.value);
    console.log("ngOnInit this._differ", this._differ);

    // this.inputEvents.subscribe((e: any) => {
    //   console.log('SmartFormComponent got event', e);
    // });

    this.form.valueChanges
      .debounceTime(400)
      .distinctUntilChanged()
      .subscribe((change) => {
        let changedFieldValue = this.GetChangedFieldAndNewValue(change);
        if (changedFieldValue) {
          console.log('changedFieldValue', changedFieldValue);

          const changedControl = this.getChangedControl(changedFieldValue, this.controls);

          if (changedControl.rules) {
            console.log('changedControl has rules', changedControl.rules);
            let controlsToReset = this.getControlsToReset(changedControl, this.controls);
            console.log('controlsToReset', controlsToReset);
            controlsToReset.forEach(control => {
              console.log('control to reset:', control);
              this.resetControl(control)
            });
            this._differ = this._differs.find(this.value).create(null).diff(this.value);
          }
        }
        console.log('this.value after rules', this.value);
        this.valueUpdate.emit(this.value);
        // if (!this.updateDelay) {
        //   this.updateDelay = true;
        //   setTimeout(() => {
        //     this.valueUpdate.emit(this.value);
        //     this.updateDelay = false;
        //   }, 500);
        // }
      });

  }

  createGroup() {
    const group = this.fb.group({});
    this.controls.forEach(control => group.addControl(control.name, this.createControl(control)));
    return group;
  }

  createControl(config: FieldConfig) {
    let {disabled, validators, validation, value} = config;

    console.log('----------------createControl---------')

    if (!validation) validation = [];
    if (validators) {
      validators.forEach(v => {
        if (v.required === true) validation.push(Validators.required);
        if (v.minLength) validation.push(Validators.minLength(v.minLength));
        if (v.maxLength) validation.push(Validators.maxLength(v.maxLength));
      });
    }

    // if (!validation) {
    //   validation.push(Validators.required);
    // }

    return this.fb.control({disabled, value}, validation);
  }


  ngOnChanges(changes) {
    console.log('changes: ' + changes);
    // let newVal = changes['validateChild'].currentValue;
    // console.log('parent changed value to: ' + newVal);

    // if (this.form) {
    //   const controls = Object.keys(this.form.controls);
    //   const configControls = this.controls.map((item) => item.name);
    //
    //   console.log(controls)
    //   console.log(configControls)
    //   // controls
    //   //   .filter((control) => !configControls.includes(control))
    //   //   .forEach((control) => this.form.removeControl(control));
    //   //
    //   // configControls
    //   //   .filter((control) => !controls.includes(control))
    //   //   .forEach((name) => {
    //   //     const config = this.config.find((control) => control.name === name);
    //   //     this.form.addControl(name, this.createControl(config));
    //   //   });
    //
    // }
  }


  private GetChangedFieldAndNewValue(change?: any) {
    console.log('GetChangedFieldAndNewValue invoked');
    let changedFieldValue: any = null;
    if (this._differ) {
      const changes = this._differ.diff(this.value);
      if (changes) {
        console.log('changes detected', changes);
        if (changes.forEachChangedItem) changes.forEachChangedItem(r => {
          changedFieldValue = {name: r.key, value: r.currentValue};
        });
        changes.forEachAddedItem(r => {
          console.log('added ' + r.currentValue);
        });
        changes.forEachRemovedItem(r => {
          console.log('removed ' + r.currentValue);
        });
      } else {
        console.log('nothing changed');
      }
    }
    return changedFieldValue;
  }

  validateAllFormFields(formGroup: FormGroup) {         //{1}
    Object.keys(formGroup.controls).forEach(field => {  //{2}
      const control = formGroup.get(field);             //{3}
      if (control instanceof FormControl) {             //{4}
        control.markAsTouched({onlySelf: true});
      } else if (control instanceof FormGroup) {        //{5}
        this.validateAllFormFields(control);            //{6}
      }
    });
  }


  validate() {
    if (this.form.valid) {
      console.log('form submitted');
    } else {
      this.validateAllFormFields(this.form); //{7}
    }
  }

  ngDoCheck() {

  }

  toggleAllToggles() {
    console.log('this.selectAllTogglesButtonToggleValue', this.selectAllTogglesButtonToggleValue)
    let newValue = this.selectAllTogglesButtonToggleValue ? 'yes' : 'no';
    for (let c in this.form.controls) {
      if (c.toString().split(':')[1] == 'button')
        this.form.controls[c].setValue(newValue);
    }
  }


  handleSubmit(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    this.submit.emit(this.value);
  }

  setDisabled(name: string, disable: boolean) {
    if (this.form.controls[name]) {
      const method = disable ? 'disable' : 'enable';
      this.form.controls[name][method]();
      return;
    }

    this.config = this.config.map((item) => {
      if (item.name === name) {
        item.disabled = disable;
      }
      return item;
    });
  }

  setValue(name: string, value: any) {
    this.form.controls[name].setValue(value, {emitEvent: true});
  }

  private resetControl(control: any) {
    // TODO: test it : control.reset();
    const controlToReset = this.form.controls[control.name];
    const dataType = control.name.substring(control.name.indexOf(":") + 1, control.name.length);
    console.log('resetControl dataType', dataType)
    switch (dataType) {
      case 'button':
        controlToReset.setValue(false, {emitEvent: false});
        break;
      case 'input':
        controlToReset.setValue('', {emitEvent: false});
        break;
      default:
        controlToReset.setValue(undefined, {emitEvent: false});
        break;
    }
    console.log('resetControl new values', controlToReset.value);
  }
}
