import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsGroupsViewComponent } from './items-groups-view.component';

describe('ItemsGroupsViewComponent', () => {
  let component: ItemsGroupsViewComponent;
  let fixture: ComponentFixture<ItemsGroupsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemsGroupsViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemsGroupsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
