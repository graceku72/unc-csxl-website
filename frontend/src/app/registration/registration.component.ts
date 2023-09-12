import { Component } from '@angular/core';
import { RegistrationService } from '../registration.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

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
    firstName: '',
    lastName: '',
    pid: ''
  });

  constructor(
    private router: Router,
    private registrationService : RegistrationService,
    private formBuilder: FormBuilder,
  ) {}

  onSubmit(): void {
    //const firstNameInput = this.checkoutForm.get('firstName').value;
    // after fixing this, import and use init in the confirmation typescript file
    //this.registrationService.setFirstName(firstNameInput);
    //call clear service methods
    this.checkoutForm.reset();
    this.router.navigate(['/confirmation']);
  }
}
