import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressesDeleteComponent } from './addresses-delete.component';

describe('AddressesDeleteComponent', () => {
  let component: AddressesDeleteComponent;
  let fixture: ComponentFixture<AddressesDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddressesDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddressesDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
