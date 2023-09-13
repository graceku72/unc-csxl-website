import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { CheckInService } from '../check-in.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-checkin',
  templateUrl: './checkin.component.html',
  styleUrls: ['./checkin.component.css']
})
export class CheckinComponent {
  checkoutForm = this.formBuilder.group({
    pid: []
  });

  constructor(
    private router: Router,
    private checkinService: CheckInService,
    private formBuilder: FormBuilder

    ) {
    
  }

  onSubmit() {
    const pid = this.checkoutForm.value.pid;
    console.log(pid);

  
    if (pid !== null && pid !== undefined) {
      if (String(pid).length !== 9) { 
        alert("PID should be 9 digits.");
        return;
      }

      const foundUser = this.checkinService.getUsers().find(user => user.getPid() === pid);
      if (foundUser) {
        const userName = foundUser.getName();
        this.checkinService.addCheckin(foundUser.getName());
        this.router.navigate(['/checkin-confirmation', userName]);
      } else {
        alert("PID was not found.");
      }
    }
  }
}
