import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class CheckInService {
  private checkins: {name: string, time: Date }[];

  constructor(
    private userService: UserService
  ) { 
    this.checkins = [];
  }

  getCheckins() {
    return this.checkins;
  }

  addCheckin(name: string) {
    const time = new Date();
    this.checkins.push({name, time})
  }

  getUsers(): User[] {
    return this.userService.getUsers();
  }


}
