import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvitacionSOAPComponent } from './invitacion-soap.component';

describe('InvitacionSOAPComponent', () => {
  let component: InvitacionSOAPComponent;
  let fixture: ComponentFixture<InvitacionSOAPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvitacionSOAPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvitacionSOAPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
