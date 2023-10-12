import { TestBed } from '@angular/core/testing';

import { ItemsGroupsService } from './items-groups.service';

describe('ItemsGroupsService', () => {
  let service: ItemsGroupsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemsGroupsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
