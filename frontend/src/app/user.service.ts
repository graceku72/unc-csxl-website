import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user: User | null = null; // Initialize it as null
  private users: User[] = [];


  constructor(
    
  ) { }

  register(firstName: string, lastName: string, PID: number) {
    this.user = new User(firstName, lastName, PID);
    this.addUser(this.user);
  }

  getUser(): User | null {
    return this.user;
  }

  // right now the UserService class handles currently logged in user
  // and has access to ALL users

  // TODO: students should only have access to their own user

  getUsers(): User[] {
    return this.users;
  }

  addUser(newUser: User): void {
    this.users.push(newUser);
  }
}
