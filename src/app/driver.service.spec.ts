import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { DriverService } from './driver.service';

describe('DriverService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule],
    providers: [DriverService]
  }));

  it('should be created', () => {
    const service: DriverService = TestBed.get(DriverService);
    expect(service).toBeTruthy();
  });
});
