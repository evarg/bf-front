import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumbersEditComponent } from './numbers-edit.component';

describe('NumbersEditComponent', () => {
  let component: NumbersEditComponent;
  let fixture: ComponentFixture<NumbersEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumbersEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumbersEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
