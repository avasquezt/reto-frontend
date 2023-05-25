import { TestBed } from '@angular/core/testing';

import { PruebaMapperService } from './prueba-mapper.service';

describe('PruebaMapperService', () => {
  let service: PruebaMapperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PruebaMapperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
