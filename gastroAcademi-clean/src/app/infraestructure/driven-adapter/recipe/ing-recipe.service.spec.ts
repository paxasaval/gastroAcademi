import { TestBed } from '@angular/core/testing';

import { IngRecipeService } from './ing-recipe.service';

describe('IngRecipeService', () => {
  let service: IngRecipeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IngRecipeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
