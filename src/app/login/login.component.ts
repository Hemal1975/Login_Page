import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, NgForm} from '@angular/forms';
import { LoginService } from './login.service';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // autoShownModal: BsModalRef;
  @ViewChild('loginForm', {static: false}) loginForm: NgForm;
  isSubmitted =  false;
 
  constructor(private loginService: LoginService){}

  ngOnInit() {
    // this.loginFormData();
  }

 

  onPONL(){
    if (!this.loginForm.valid) {
      this.isSubmitted = true;
    } else {
      const userID = this.loginForm.value.userName;
      const password = this.loginForm.value.password;
      console.log(userID, password);
      this.loginService.postLoginCredential('tuser1','June2019').subscribe(
        res => {
          console.log(res);
        }, error => {
          console.log(error);
        }
      );
    }
  }

  onFONL(){
    if (!this.loginForm.valid) {
      this.isSubmitted = true;
    } else {
      const userID = this.loginForm.value.userName;
      const password = this.loginForm.value.password;
      console.log(userID, password);
      this.loginService.postLoginCredential('tuser1','June2019').subscribe(
        res => {
          console.log(res);
        }, error => {
          console.log(error);
        }
      );
    }
  }

  onCOLA(){
    if (!this.loginForm.valid) {
      this.isSubmitted = true;
    } else {
      const userID = this.loginForm.value.userName;
      const password = this.loginForm.value.password;
      console.log(userID, password);
      this.loginService.postLoginCredential('tuser1','June2019').subscribe(
        res => {
          console.log(res);
        }, error => {
          console.log(error);
        }
      );
    }
  }

}
