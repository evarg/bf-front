import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsGroupsNewComponent } from './items-groups-new.component';

describe('ItemsGroupsNewComponent', () => {
  let component: ItemsGroupsNewComponent;
  let fixture: ComponentFixture<ItemsGroupsNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemsGroupsNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemsGroupsNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
