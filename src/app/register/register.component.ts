import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  RegistrationChoice: string;

  constructor() { }

  ngOnInit() {
  }

  forRegistration(selectedRegestration: string){
    console.log(selectedRegestration);
    this.RegistrationChoice = selectedRegestration;
  }



}
