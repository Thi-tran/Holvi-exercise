import { DriverService } from './../driver.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { TeamInfoPopUpComponent } from './team-info-pop-up/team-info-pop-up.component';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass'],
})
export class ListComponent implements OnInit {

  public drivers: any;
  public orderBy: String;
  
  constructor(private _driverService: DriverService, public dialog: MatDialog) { }

  ngOnInit() {
    this._driverService.getDrivers()
      .subscribe(
        data => this.drivers = data,
        error => console.error(error)
      )
  }

  OpenTeamInfo(team:any){
    const dialogRef = this.dialog.open(TeamInfoPopUpComponent, {  
      data: team 
    });
    dialogRef.afterClosed().subscribe(result => {

    });
  }

  OrderBy(event:any){
    this.drivers = this.drivers.sort((a: any, b: any) => {
      if (a[event] < b[event]) return -1;
      else if (a[event] > b[event]) return 1;
      else return 0
    });
  }
}
