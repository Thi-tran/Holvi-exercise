import { Component, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import { MatDialog } from '@angular/material';
import { Inject } from '@angular/core';
import { TeamService } from 'src/app/team.service';

@Component({
  selector: 'app-team-info-pop-up',
  templateUrl: './team-info-pop-up.component.html',
  styleUrls: ['./team-info-pop-up.component.sass']
})
export class TeamInfoPopUpComponent implements OnInit {

  public teamInfo = {};
  constructor(    
    public dialogRef: MatDialogRef<TeamInfoPopUpComponent>,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public _teamService: TeamService
) { }

  ngOnInit() {
    this._teamService.getTeamByID(this.data)
      .subscribe(
        data => this.teamInfo = data[0],
        error => console.error(error)
      )
  }

  Close(event){
    event.preventDefault();
    this.dialogRef.close("false");
  }
}
