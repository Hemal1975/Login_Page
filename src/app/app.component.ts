import { Component } from '@angular/core';
import { BnNgIdleService } from 'bn-ng-idle'; // import bn-ng-idle service

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  constructor (private bnIdleService: BnNgIdleService) {
    this.bnIdleService.startWatching(300).subscribe((res) => {
      if(res) {
          console.log("session expired");
          alert("Session will be expired");
      }
    })
  }
}
