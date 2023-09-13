import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-checkin-confirmation',
  templateUrl: './checkin-confirmation.component.html',
  styleUrls: ['./checkin-confirmation.component.css']
})
export class CheckinConfirmationComponent implements OnInit {
  userName: string;

  constructor(private route: ActivatedRoute) { this.userName = "Default Name" }

  ngOnInit() {
    this.userName = this.route.snapshot.params['userName'];
  }
}
