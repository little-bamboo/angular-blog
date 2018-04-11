import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // lineChart

  public lineChartOptions: any = {
    maintainAspectRatio: true,
    legend: {
      display: true,
      position: 'top',
      labels: {
        boxWidth: 15
      },
      usePointStyle: false
    },
    tooltips: {
      titleSpacing: 10,
      titleMarginBottom: 10,
      bodySpacing: 8,
      cornerRadius: 3,
      xPadding: 15,
      yPadding: 15
    },
    scales: {
      xAxes: [{
        gridLines: {
          display: false
        },
        ticks: {
          fontFamily: '"Raleway", "Arial", sans-serif',
          fontSize: 13,
          fontStyle: 'bold',
          fontColor: '#878787'
        }
      }],
      yAxes: [{
        gridLines: {
          display: false
        },
        ticks: {
          fontFamily: '"Raleway", "Arial", sans-serif',
          fontSize: 13,
          fontStyle: 'bold',
          fontColor: '#878787'
        }
      }]
    }
  };

  public lineChartData: Array<any> = [
    [65, 59, 80, 81, 56, 55, 40],
    [28, 48, 40, 19, 86, 27, 90]
  ];
  public lineChartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartType = 'line';

  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels: string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType = 'bar';
  public barChartLegend = true;

  public barChartData: any[] = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Unique Visitors'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Page Views'}
  ];

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  public randomize(): void {
    // Only Change 3 values
    const data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40];
    const clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;
    /**
     * (My guess), for Angular to recognize the change in the dataset
     * it has to change the dataset variable directly,
     * so one way around it, is to clone the data, change it and then
     * assign it;
     */
  }

  constructor() {

  }

  ngOnInit(): void {


  }
}
