import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user: User | null = null; // Initialize it as null


  constructor(
    
  ) { }

  register(firstName: string, lastName: string, PID: number) {
    this.user = new User(firstName, lastName, PID);
  }

  getUser(): User | null {
    return this.user;
  }
}
