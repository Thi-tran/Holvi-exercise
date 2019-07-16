import { HttpClient } from '@angular/common/http';
import { TeamService } from 'src/app/team.service';
import { DriverService } from './../../driver.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { IDriver } from 'src/app/model/driver';
import {Chart} from 'chart.js';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.sass']
})
export class DriverComponent implements OnInit {

  driver = {
  }
  team_drivers = []
  team = {
    team: ''
  }
  observable: Observable<IDriver[]>;
  public chart = []
  constructor(  
    private route: ActivatedRoute,
    private _driverService: DriverService,
    private _teamService: TeamService,
    public http: HttpClient
  ) { }

  ngOnInit() {
    let id = Number(this.route.snapshot.paramMap.get('id'));

    this._driverService.getDrivers().pipe(
      tap(driver => this.driver = driver[id]),
      tap(driver => this.team_drivers = driver.filter(item => item.team === driver[id].team)),
      switchMap(result => this._teamService.getTeamByID(result[id].team)),
    ).subscribe(
      result2 => {
        this.team = result2[0];  
        let names = this.team_drivers.map(res => res.driver);
        let points = this.team_drivers.map(res => res.points);
        this.chart = new Chart('canvas', {
          type: 'horizontalBar',
          data: {
            labels: names,
            datasets: [{
              data: points,
              fill: false,
              backgroundColor: [
                '#4bcffa',
                '#4bcffa',
            ],
            }]
          },
          options:{
            responsive: true,
            maintainAspectRatio: false,        
            legend:{
              display: false
            },
            scales:{
              xAxes:[{
                display: true,
                ticks: {
                  beginAtZero: true
                }
              }]
            },
            title: {
              display: true,
              text: this.team.team + ' Points',
              fontSize: 25
            },  
          }
        })
      },
      error => console.log(error)
    )
  }
}
