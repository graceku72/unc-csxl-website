import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckInService {
  private checkins: {name: string, time: Date }[];

  constructor() { 
    this.checkins = [];
  }

  getCheckins() {
    return this.checkins;
  }

  addCheckin(name: string) {
    const time = new Date();
    this.checkins.push({name, time})
    
  
    
  }


}
