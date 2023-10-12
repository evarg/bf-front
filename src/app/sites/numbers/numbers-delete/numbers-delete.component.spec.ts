import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumbersDeleteComponent } from './numbers-delete.component';

describe('NumbersDeleteComponent', () => {
  let component: NumbersDeleteComponent;
  let fixture: ComponentFixture<NumbersDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumbersDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumbersDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
