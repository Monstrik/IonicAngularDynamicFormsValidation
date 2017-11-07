import {ValidatorFn} from '@angular/forms';

export interface FieldConfig {
  type: string,
  disabled?: boolean,
  multiple?: boolean,
  label?: string,
  name: string,
  max?: string,
  min?: string,
  options?: any[],
  placeholder?: string,
  required?: boolean,
  validation?: ValidatorFn[],
  validators?:any[],
  value?: any

}

