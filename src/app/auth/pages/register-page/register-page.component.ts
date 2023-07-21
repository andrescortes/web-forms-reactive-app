import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ValidatorsService } from 'src/app/shared/services/validators.service';

@Component({
  templateUrl: './register-page.component.html',
  styles: [
  ]
})
export class RegisterPageComponent {

  public myForm = this.fb.group({
    name: ['', [Validators.required, Validators.pattern(this.validatorsService.firstNameAndLastnamePattern)]],
    email: ['', [Validators.required, Validators.pattern(this.validatorsService.emailPattern)]],
    username: ['', [Validators.required, this.validatorsService.cantBeStrider]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    password2: ['', [Validators.required, Validators.minLength(6)]],
  })

  constructor(
    private readonly fb: FormBuilder,
    private readonly validatorsService: ValidatorsService
  ) {

  }

  isValidField(field: string) {
    this.validatorsService.isValidField(this.myForm, field);
  }

  onSubmit() {
    console.log(this.myForm.value);

    this.myForm.markAllAsTouched();
  }


}
