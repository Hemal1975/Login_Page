
import { ModalModule } from 'ngx-bootstrap/modal';
import { HttpClientModule } from '@angular/common/http';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { MainRegistrationComponent } from './main-registration/main-registration.component';
import { NgModule } from '@angular/core';
import { RegisterRoutingModule } from './register.routing.module';
import { CompanyComponent } from './company/company.component';
import { CommentsComponent } from './comments/comments.component';
import { DocsComponent } from './dosc/docs.component.ts';
import { CommonModule } from '@angular/common';
import {NgxPrintModule} from 'ngx-print';

@NgModule({
  declarations: [
    MainRegistrationComponent,
    CompanyComponent,
    CommentsComponent,
    DocsComponent
  ],
  imports: [
    RegisterRoutingModule,
    NgxPrintModule,
    CommonModule,
    ModalModule.forRoot(),
    TooltipModule.forRoot()
  ],
  exports: [
    MainRegistrationComponent,
    CompanyComponent,
    CommentsComponent,
    DocsComponent
  ],
  providers: [],
  bootstrap: []
})
export class RegisterModule { }