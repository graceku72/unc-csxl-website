import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    //const routeParams = this.route.snapshot.paramMap: const 
  }
}
