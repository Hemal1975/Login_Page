import { Component, TemplateRef } from '@angular/core';
import { BnNgIdleService } from 'bn-ng-idle'; // import bn-ng-idle service
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  modalRef: BsModalRef;
  template: TemplateRef<any>;
  startNumber = 0;
  sessionTime = 10;
 
  constructor (private bnIdleService: BnNgIdleService, 
    private modalService: BsModalService) {
    this.bnIdleService.startWatching(this.sessionTime).subscribe((res) => {
      if(res) {
        this.modalRef = this.modalService.show(this.template);
          // alert("Session will be expired");
        setInterval(() => {
         
          // console.log(this.modalRef);
        }, 1000);
      }
    })
  }
}
