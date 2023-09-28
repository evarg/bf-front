import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftMenuComponentComponent } from './left-menu-component.component';

describe('LeftMenuComponentComponent', () => {
  let component: LeftMenuComponentComponent;
  let fixture: ComponentFixture<LeftMenuComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftMenuComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeftMenuComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
