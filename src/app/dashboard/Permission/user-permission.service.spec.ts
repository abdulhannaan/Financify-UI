import { TestBed } from '@angular/core/testing';

import { UserPermission } from './user-permission.service';

describe('UserPermissionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserPermission = TestBed.get(UserPermission);
    expect(service).toBeTruthy();
  });
});
