import { Component, Input } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

// tslint:disable: component-class-suffix
@Component({
  selector: 'app-form-control-error',
  template: ``
})
export class FormControlErrorComponentMock {
  @Input() errors: ValidationErrors;
}
