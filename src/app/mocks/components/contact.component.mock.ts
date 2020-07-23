import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

// tslint:disable: component-class-suffix
@Component({
  selector: 'app-contact',
  template: ``
})
export class ContactComponentMock {
  form: FormGroup;
  email: FormControl;
  message: FormControl;
  onSubmit(): void {}
}
