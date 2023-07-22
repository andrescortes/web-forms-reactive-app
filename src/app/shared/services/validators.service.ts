import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class ValidatorsService {

  public firstNameAndLastnamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  public emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  constructor() { }

  cantBeStrider = (control: FormControl): ValidationErrors | null => {
    const value: string = control.value.trim().toLowerCase();

    if (value === "strider") {
      return {
        noStrider: true
      };
    }
    return null;
  };

  isValidField(myForm: FormGroup, field: string): boolean | null {
    return myForm.controls[field].errors && myForm.controls[field].touched;
  }

  isFieldOneToEqualFieldTwo(fieldOne: string, fieldTwo: string): ValidationErrors | null {
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const fieldOneControl = formGroup.get(fieldOne)?.value;
      const fieldTwoControl = formGroup.get(fieldTwo)?.value;

      if (fieldOneControl !== fieldTwoControl) {
        formGroup.get(fieldTwo)?.setErrors({ noMatch: true });
        return {
          noMatch: true
        }
      }
      formGroup.get(fieldTwo)?.setErrors(null);
      return null;
    }
  }

}
