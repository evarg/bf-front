import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiedeBarComponentComponent } from './siede-bar-component.component';

describe('SiedeBarComponentComponent', () => {
  let component: SiedeBarComponentComponent;
  let fixture: ComponentFixture<SiedeBarComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiedeBarComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiedeBarComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
