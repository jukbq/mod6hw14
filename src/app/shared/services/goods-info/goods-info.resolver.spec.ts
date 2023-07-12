import { TestBed } from '@angular/core/testing';

import { GoodsInfoResolver } from './goods-info.resolver';
import {HttpClientModule} from "@angular/common/http";

describe('GoodsInfoResolver', () => {
  let resolver: GoodsInfoResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
      providers: [ GoodsInfoResolver ]
    });
    resolver = TestBed.inject(GoodsInfoResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
