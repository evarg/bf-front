import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsGroupsDeleteComponent } from './items-groups-delete.component';

describe('ItemsGroupsDeleteComponent', () => {
  let component: ItemsGroupsDeleteComponent;
  let fixture: ComponentFixture<ItemsGroupsDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemsGroupsDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemsGroupsDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
