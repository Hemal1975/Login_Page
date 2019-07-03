import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  hrColorBlue: boolean;

  ngOnInit() {
  }

  onRegister(){
    // alert('Register');
  }

  onHowToRegistar(){
    alert('sdfsfd');
  }

  modalRef: BsModalRef;
  message: string;
  constructor(private modalService: BsModalService, 
    private router: Router) {}
 
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
 
  onOK(): void {
   
    this.router.navigate(['formulaOnline']);
    this.hrColorBlue = false;
    this.modalRef.hide();
  }
 
  onCancel(): void {
    this.modalRef.hide();
  }

}
