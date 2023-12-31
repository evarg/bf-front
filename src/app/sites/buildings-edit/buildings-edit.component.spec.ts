import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingsEditComponent } from './buildings-edit.component';

describe('BuildingsEditComponent', () => {
  let component: BuildingsEditComponent;
  let fixture: ComponentFixture<BuildingsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuildingsEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuildingsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
