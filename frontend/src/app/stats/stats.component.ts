import { Component } from '@angular/core';
import { dummyUsers } from '../dummy-data';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent {
  users = dummyUsers;
}
