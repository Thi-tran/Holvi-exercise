import { TeamServiceMock } from './../../mock/team.service.mock';
import { TeamService } from 'src/app/team.service';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { TeamInfoPopUpComponent } from './team-info-pop-up.component';

describe('TeamInfoPopUpComponent', () => {
  let component: TeamInfoPopUpComponent;
  let fixture: ComponentFixture<TeamInfoPopUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        {provide: MatDialogRef, useValue: {}},
        {provide: MatDialog, useValue: {}},
        {provide: MAT_DIALOG_DATA, useValue: [] },
        {provide: TeamService, useClass: TeamServiceMock}
      ],
      declarations: [ TeamInfoPopUpComponent ]
    })
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(TeamInfoPopUpComponent);
      fixture.detectChanges();

      component = fixture.componentInstance; 
    });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return one team by ID', () => {
    expect(component.teamInfo).toBeTruthy()
  })
});
