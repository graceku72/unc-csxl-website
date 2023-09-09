import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkin',
  templateUrl: './checkin.component.html',
  styleUrls: ['./checkin.component.css']
})
export class CheckinComponent {
  constructor(private router: Router) {
    
  }

  checkin() {
    this.router.navigate(['/checkin-confirmation']);
  }
}
