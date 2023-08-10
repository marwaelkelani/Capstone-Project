import { TestBed } from '@angular/core/testing';

import { FilterProductsService } from './filter-products.service';

describe('FilterProductsService', () => {
  let service: FilterProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilterProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
