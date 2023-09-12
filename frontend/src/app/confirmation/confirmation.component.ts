import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent {
  constructor(
    private router: Router,
    private userService: UserService) {
    
  }

  home() {
    this.router.navigate(['/']);
  }

  getUserName() {
    return this.userService.getUser()?.name;
  }
  // ngOnInit(): void {
  //   //const routeParams = this.route.snapshot.paramMap: const 
  // }

  // constructor(private router: Router) {
    
  // }
}
