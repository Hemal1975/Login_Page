import { Component, OnInit } from '@angular/core';
import { CoreService } from '../core.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  hrColorBlue : boolean;

  constructor(private coreService: CoreService) {
    
   }

  
  ngOnInit() {
   
   
  }

}
