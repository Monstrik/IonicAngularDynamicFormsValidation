import { FieldConfig } from "./field-config.interface"

export interface SectionConfig {
  title: string;
  description: string;
  questions: FieldConfig[];

  // constructor(options: {
  //   title?: string,
  //   description?: string,
  //   order?: number,
  //   type?: string,
  //   questions?: FieldConfig[]
  // } = {}) {
  //   this.title = options.title || '';
  //   this.description = options.description || '';
  //   this.order = options.order === undefined ? 1 : options.order;
  //   this.type = options.type || '';
  //   this.questions = options.questions;
  // }
}
