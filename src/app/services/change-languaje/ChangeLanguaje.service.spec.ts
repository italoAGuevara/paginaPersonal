/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ChangeLanguajeService } from './ChangeLanguaje.service';

describe('Service: ChangeLanguaje', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChangeLanguajeService]
    });
  });

  it('should ...', inject([ChangeLanguajeService], (service: ChangeLanguajeService) => {
    expect(service).toBeTruthy();
  }));
});
