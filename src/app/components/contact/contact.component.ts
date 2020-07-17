import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  form: FormGroup;
  email: FormControl;
  message: FormControl;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.email = new FormControl('', [Validators.required, Validators.email]);
    this.message = new FormControl('', [Validators.required, Validators.minLength(30), Validators.maxLength(1000)]);

    this.form = this._formBuilder.group({
      email: this.email,
      message: this.message
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      // TODO: Here call API for sending form data
      console.log(this.form.value);
    } else {
      this._updateControlsValidity();
    }
  }

  private _updateControlsValidity(): void {
    Object.values(this.form.controls).forEach((control: FormControl) => {
      control.markAsTouched();
      control.updateValueAndValidity({ onlySelf: true, emitEvent: false });
    });
  }
}
