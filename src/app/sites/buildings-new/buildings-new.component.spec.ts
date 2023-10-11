import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingsNewComponent } from './buildings-new.component';

describe('BuildingsNewComponent', () => {
  let component: BuildingsNewComponent;
  let fixture: ComponentFixture<BuildingsNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuildingsNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuildingsNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
