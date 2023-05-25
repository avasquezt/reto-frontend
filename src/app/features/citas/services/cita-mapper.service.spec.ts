import { TestBed } from '@angular/core/testing';

import { CitaMapperService } from './cita-mapper.service';

describe('CitaMapperService', () => {
  let service: CitaMapperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CitaMapperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
