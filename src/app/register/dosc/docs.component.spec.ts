import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainRegistrationComponent } from './main-registration.component';

describe('MainRegistrationComponent', () => {
  let component: MainRegistrationComponent;
  let fixture: ComponentFixture<MainRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
