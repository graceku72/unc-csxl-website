import { Component } from '@angular/core';
import { dummyUsers } from '../dummy-data';
import { UserService } from '../user.service';
import { CheckInService } from '../check-in.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent {
  constructor(
    private userService: UserService,
    private checkinService: CheckInService,
  ) {

  }

  getUsers() {
    return this.userService.getUsers();
  }

  getCheckins() {
    return this.checkinService.getCheckins();
  }
}
