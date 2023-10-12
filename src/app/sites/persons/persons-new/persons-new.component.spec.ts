import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonsNewComponent } from './persons-new.component';

describe('PersonsNewComponent', () => {
  let component: PersonsNewComponent;
  let fixture: ComponentFixture<PersonsNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonsNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonsNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
