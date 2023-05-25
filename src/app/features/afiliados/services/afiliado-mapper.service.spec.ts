import { TestBed } from '@angular/core/testing';

import { AfiliadoMapperService } from './afiliado-mapper.service';

describe('AfiliadoMapperService', () => {
  let service: AfiliadoMapperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AfiliadoMapperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
