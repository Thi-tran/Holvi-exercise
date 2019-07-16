import { DriverService } from './../driver.service';
import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandingComponent } from './standing.component';
import { RouterTestingModule } from '@angular/router/testing';
import { DriverServiceMock } from '../mock/driver.service.mock';
describe('StandingComponent', () => {
  let component: StandingComponent;
  let fixture: ComponentFixture<StandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandingComponent ],
      imports: [HttpClientModule, RouterTestingModule],
      providers: [
        { provide: DriverService, useClass: DriverServiceMock }
      ]
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(StandingComponent);
      fixture.detectChanges();

      component = fixture.componentInstance; 
    });
  }));

  it('should create', () => { 
    expect(component).toBeTruthy();
  });

  it('should have one driver', () => {
    expect(component.data.length).toEqual(1)
  })
});
