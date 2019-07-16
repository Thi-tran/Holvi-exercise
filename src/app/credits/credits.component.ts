import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-credits',
  templateUrl: './credits.component.html',
  styleUrls: ['./credits.component.sass']
})
export class CreditsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  GoToListing(event){
    this.router.navigate(["/list"])
  }
  
  GoToStanding(event){
    this.router.navigate(["/standing"])
  }
}
