import {Component, ViewChild} from '@angular/core';
import {Select} from 'ionic-angular';
import {FormGroup} from '@angular/forms';
import {Field} from '../../models/field.interface';
import {FieldConfig} from '../../models/field-config.interface';


@Component({
  selector: 'form-select',
  templateUrl: 'form-select.component.html',
  // styleUrls: ['form-select.component.scss'],
})
export class FormSelectComponent implements Field {
  config: FieldConfig;
  group: FormGroup;

  @ViewChild('yourSelect') yourSelect: Select;


  onChange() {
    // console.log('onChange');
  }

  onSelect(value) {
    // console.log('onSelect val=', value);
    // if (!this.config.multiple){
    //   let name= this.config.name;
    //   console.log(this.group)
    //   // this.group.patchValue({name: value});
    //   // this.yourSelect.close();
    // }

    //   let root = this.navController["_app"]["_appRoot"];
    //   document.addEventListener('click', function (event) {
    //     let className = 'class' + me.config.name.split(':')[0];
    //     console.log('addEventListener invoked className', className)
    //     let btn = <HTMLLIElement> document.querySelector('.' + className + ' .alert-button-default:nth-child(2)');
    //     let target = <HTMLElement> event.target;
    //     if (btn && target.className == 'alert-radio-label') {
    //       console.log('addEventListener btn', btn)
    //       console.log('addEventListener target', target)
    //       let view = root._overlayPortal._views[0];
    //       let inputs = view.instance.d.inputs;
    //       for (let input of inputs) {
    //         console.log('input', input)
    //         if (input.checked) {
    //           view.instance.d.buttons[1].handler([input.value]);
    //           view.dismiss();
    //           break;
    //         }
    //       }
    //     }
    //   });
  }

  // constructor(public navController: NavController) {
  // }
  //
  // ngOnInit() {
  //   const me = this;
  //   console.log('ngOnInit')
  //   let root = this.navController["_app"]["_appRoot"];
  //   document.addEventListener('click', function (event) {
  //     let className = 'class' + me.config.name.split(':')[0];
  //     console.log('addEventListener invoked className', className)
  //     let btn = <HTMLLIElement> document.querySelector('.' + className + ' .alert-button-default:nth-child(2)');
  //     let target = <HTMLElement> event.target;
  //     if (btn && target.className == 'alert-radio-label') {
  //       console.log('addEventListener btn', btn)
  //       console.log('addEventListener target', target)
  //       let view = root._overlayPortal._views[0];
  //       let inputs = view.instance.d.inputs;
  //       for (let input of inputs) {
  //         console.log('input', input)
  //         if (input.checked) {
  //           view.instance.d.buttons[1].handler([input.value]);
  //           view.dismiss();
  //           break;
  //         }
  //       }
  //     }
  //   });
  // }
}
