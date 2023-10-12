import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsGroupsEditComponent } from './items-groups-edit.component';

describe('ItemsGroupsEditComponent', () => {
  let component: ItemsGroupsEditComponent;
  let fixture: ComponentFixture<ItemsGroupsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemsGroupsEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemsGroupsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
