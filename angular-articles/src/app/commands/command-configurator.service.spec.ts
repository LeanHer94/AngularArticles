import { TestBed } from '@angular/core/testing';

import { CommandConfiguratorService } from './command-configurator.service';

describe('CommandConfiguratorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CommandConfiguratorService = TestBed.get(CommandConfiguratorService);
    expect(service).toBeTruthy();
  });
});
