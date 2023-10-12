import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressesNewComponent } from './addresses-new.component';

describe('AddressesNewComponent', () => {
  let component: AddressesNewComponent;
  let fixture: ComponentFixture<AddressesNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddressesNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddressesNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
