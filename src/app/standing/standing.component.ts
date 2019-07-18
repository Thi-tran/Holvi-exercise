import { DriverService } from './../driver.service';
import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-standing',
  templateUrl: './standing.component.html',
  styleUrls: ['./standing.component.sass'],
})
export class StandingComponent implements OnInit {

  public data = [];
  public newData = [];
  public chart:any = [];
  interval: any;
  private subscription : Subscription;
  private updateSubscription: Subscription;
  constructor(private _driverService: DriverService, private router: Router) { }


  ngOnInit() {
    this.driverInit();
    this.interval = setInterval(() => {
      this.updateDriver()
    }, 1000)
  }


  ngOnDestroy(){
    if (this.interval) clearInterval(this.interval)
    this.subscription.unsubscribe();
  }


  driverInit(){
    this.subscription = this._driverService.getStanding()
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
          tooltips: {
            enabled: false
          },
          responsive: true,
          maintainAspectRatio: false,        
          legend:{
            display: false
          },
          scales:{
            xAxes:[{
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


  updateDriver() {
    this.updateSubscription = this._driverService.getStanding()
    .subscribe(res => {
      let newPoints = res.map(res => res.points);
      let points = this.data.map(res => res.points);

      let IDupdate;
      for (let i = 0; i < points.length ; i++) {
        if (newPoints[i] !== points[i]) IDupdate = i;
      }

      console.log('Get UPdate in ', IDupdate)
      this.chart.data.datasets[0].data[IDupdate] = newPoints[IDupdate];
      this.chart.update();

      this.data = res;
    })
  }


  OnHandleClickChart(event, item){
    this.updateSubscription.unsubscribe();

    if (item[0]) this.router.navigate(["/driver/"+ item[0]._index]);
  }


}
