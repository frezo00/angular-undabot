import { Component, Input } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-form-control-error',
  templateUrl: './form-control-error.component.html',
  styleUrls: ['./form-control-error.component.scss']
})
export class FormControlErrorComponent {
  @Input() errors: ValidationErrors;
}
