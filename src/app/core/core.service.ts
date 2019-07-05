import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  hrColor: boolean;

  constructor() { }

  hrColorChange(hrValue: boolean){
     this.hrColor = hrValue;
     console.log(this.hrColor);
     return;
  }

}
