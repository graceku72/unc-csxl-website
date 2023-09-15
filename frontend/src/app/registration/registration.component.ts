import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { UserService } from '../user.service';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
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
    if (String(pid).length !== 9) {
      alert("Invalid PID!");
      return;
    }
    if (firstName !== null && firstName !== undefined &&
      lastName !== null && lastName !== undefined &&
      pid !== null && pid !== undefined) {
      this.userService.register(firstName, lastName, parseInt(pid));

      console.log(this.userService.getUser());
      
      this.router.navigate(['/confirmation']);
    }
    
  }
}
