import { DriverService } from './../driver.service';
import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-standing',
  templateUrl: './standing.component.html',
  styleUrls: ['./standing.component.sass'],
})
export class StandingComponent implements OnInit {

  public data = []
  public chart = [];
  constructor(private _driverService: DriverService, private router: Router) { }

  ngOnInit() {
    this._driverService.getStanding()
      .subscribe(res => {
        this.data = res;
        let points = res.map(res => res.points);
        let names = res.map(res => res.driver)
        console.log('change data')
        this.chart = new Chart('canvas', {
          type: 'horizontalBar',
          data: {
            labels: names,
            datasets: [{
              data: points,
              fill: false,
              backgroundColor: [
                '#A8182D',
                '#A8182D',
                '#F7EF54',
                '#F7EF54',
                '#F53B57',
                '#F53B57',
                '#1B8FC2',
                '#1B8FC2',
                '#07A827',
                '#07A827',
                '#FF5770',
                '#FF5770',
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
                display: false,
                ticks: {
                  beginAtZero: true
                }
              }],
              yAxes: [{ticks: {fontSize: 15, fontColor: '#000'}}],
            },
            onClick: (event, item) => this.OnHandleClickChart(event, item),

          }
        })
      })
  }

  OnHandleClickChart(event, item){
    if (item[0]) this.router.navigate(["/driver/"+ item[0]._index])
  }
}
