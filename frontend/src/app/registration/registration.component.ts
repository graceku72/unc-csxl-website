import { Component } from '@angular/core';
import { RegistrationService } from '../registration.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { UserService } from '../user.service';
import { last } from 'rxjs';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  // firstName = this.registrationService.getFirstName();
  // lastName = this.registrationService.getLastName();
  // pid = this.registrationService.getPid();

  checkoutForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    pid: ['', Validators.required],
  });
  

  constructor(
    private router: Router,
    private userService : UserService,
    private formBuilder: FormBuilder,
  ) {}

  onSubmit(): void {
    const { firstName, lastName, pid } = this.checkoutForm.value;
    //it would not let me make new user without this validation 
    if (firstName !== null && firstName !== undefined &&
      lastName !== null && lastName !== undefined &&
      pid !== null && pid !== undefined) {
      this.userService.register(firstName, lastName, parseInt(pid));

      console.log(this.userService.getUser());
      
      this.router.navigate(['/confirmation']);
    }
    
  }
}
