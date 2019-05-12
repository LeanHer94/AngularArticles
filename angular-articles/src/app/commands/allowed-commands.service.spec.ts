import { TestBed } from '@angular/core/testing';

import { AllowedCommandsService } from './allowed-commands.service';

describe('AllowedCommandsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AllowedCommandsService = TestBed.get(AllowedCommandsService);
    expect(service).toBeTruthy();
  });
});
