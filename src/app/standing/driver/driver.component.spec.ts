import { TeamServiceMock } from './../../mock/team.service.mock';
import { DriverServiceMock } from './../../mock/driver.service.mock';
import { DriverService } from './../../driver.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router'; 
import { DriverComponent } from './driver.component';
import { TeamService } from 'src/app/team.service';

describe('DriverComponent', () => {
  let component: DriverComponent;
  let fixture: ComponentFixture<DriverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterModule.forRoot([])],
      providers: [DriverService, TeamService,
        {provide: DriverService, useClass: DriverServiceMock},
        {provide: TeamService, useClass: TeamServiceMock}
      ],
      declarations: [ DriverComponent ]
    })
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(DriverComponent);
      fixture.detectChanges();

      component = fixture.componentInstance; 
    });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
});
