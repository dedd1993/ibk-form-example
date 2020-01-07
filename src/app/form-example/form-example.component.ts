import { Component } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-example',
  templateUrl: './form-example.component.html',
  styleUrls: ['./form-example.component.scss']
})
export class FormExampleComponent {
  form: FormGroup;
  roleOptions = [
    { id: '1', label: 'Admin', state: true },
    { id: '2', label: 'Monitor', state: true },
    { id: '3', label: 'Sales', state: true },
  ];

  constructor() {
    this.form = this.initFormBuilder();
  }

  onSubmit() {
    console.log(this.form.value);
  }

  onReset() {
    this.form.reset();
  }

  private initFormBuilder(): FormGroup {
    return new FormGroup({
      documentNumber: new FormControl({ value: '12345679', disabled: false }, [ ]),
      email: new FormControl({ value: null, disabled: false }, [ Validators.required, Validators.email ]),
      password: new FormControl({ value: null, disabled: false }, [ Validators.required ]),
      role: new FormControl({ value: null, disabled: false }, [ Validators.required ]),
      rememberMe: new FormControl({ value: false, disabled: false }, [ ]),
    });
  }
}
