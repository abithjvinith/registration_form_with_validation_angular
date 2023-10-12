import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';

// ageValidator function code
function ageValidator(control: AbstractControl): ValidationErrors | null {
  const selectedDate = new Date(control.value);
  const currentDate = new Date();
  const age = currentDate.getFullYear() - selectedDate.getFullYear();

  if (age >= 18) {
    return null; // Valid age
  } else {
    return { below18: true }; // Invalid age
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Registration Form';
  register = new FormGroup({
    name: new FormControl("", Validators.required),
    phonenumber: new FormControl("", [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern("[0-9]*")]),
    email: new FormControl("", [Validators.required, Validators.email]),
    dob: new FormControl("", [Validators.required, ageValidator]),
  });

  GetData() {
    console.log(this.register.value);
  }
}
