import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-registration',
  templateUrl: './main-registration.component.html',
  styleUrls: ['./main-registration.component.scss']
})
export class MainRegistrationComponent implements OnInit {
  states = [ "AL", "AK", "AS", "AZ", "AR", "CA", "CO", "CT", "DE", "DC", "FM", "FL", "GA", "GU", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MH", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "MP", "OH", "OK", "OR", "PW", "PA", "PR", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VI", "VA", "WA", "WV", "WI", "WY" ];
  inActiveUserIdDiv = false;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onClickTypeOfApplication(selectedValue: string){
    console.log(selectedValue);
    if(selectedValue == 'reactivateAccount') {
      this.inActiveUserIdDiv = true;
    } else {
      this.inActiveUserIdDiv = false;
    }
  }

  onCompany() {
    this.router.navigate(['register']);
  }

}
