import { Injectable } from '@angular/core';
// import User

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor() {
    
  }
  firstName: string = '';
  lastName: string = '';
  pid: string = '';

  setFirstName(data: string) {
    this.firstName = data;
  }

  getFirstName() {
    return this.firstName;
  }

  setLastName(data: string) {
    this.lastName = data;
  }

  getLastName() {
    return this.lastName;
  }

  setPid(data: string) {
    this.pid = data;
  }

  getPid() {
    return this.pid;
  }

  //clear methods
}
