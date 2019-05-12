import { TestBed } from '@angular/core/testing';

import { SwitchAlertsCommandService } from './switch-alerts-command.service';

describe('SwitchAlertsCommandService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SwitchAlertsCommandService = TestBed.get(SwitchAlertsCommandService);
    expect(service).toBeTruthy();
  });
});
