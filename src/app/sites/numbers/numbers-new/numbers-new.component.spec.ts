import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumbersNewComponent } from './numbers-new.component';

describe('NumbersNewComponent', () => {
  let component: NumbersNewComponent;
  let fixture: ComponentFixture<NumbersNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumbersNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumbersNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
