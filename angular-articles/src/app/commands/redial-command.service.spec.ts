import { TestBed } from '@angular/core/testing';

import { RedialCommandService } from './redial-command.service';

describe('RedialCommandService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RedialCommandService = TestBed.get(RedialCommandService);
    expect(service).toBeTruthy();
  });
});
