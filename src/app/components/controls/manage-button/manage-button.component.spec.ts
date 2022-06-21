import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageButtonComponent } from './manage-button.component';

describe('ManageButtonComponent', () => {
  let component: ManageButtonComponent;
  let fixture: ComponentFixture<ManageButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
