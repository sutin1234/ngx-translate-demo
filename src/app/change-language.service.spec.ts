import { TestBed } from '@angular/core/testing';

import { ChangeLanguageService } from './change-language.service';

describe('ChangeLanguageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChangeLanguageService = TestBed.get(ChangeLanguageService);
    expect(service).toBeTruthy();
  });
});
