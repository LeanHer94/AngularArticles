import { TestBed } from '@angular/core/testing';

import { VoiceMailCommandService } from './voice-mail-command.service';

describe('VoiceMailCommandService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VoiceMailCommandService = TestBed.get(VoiceMailCommandService);
    expect(service).toBeTruthy();
  });
});
