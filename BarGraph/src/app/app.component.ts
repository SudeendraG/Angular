import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 aux: any;
 value1:string;
 fromvalue:string;
 tovalue:string;

  auxRiskScoreFrom: any;
  auxRiskScoreTo: any;
//  minval:any=1000;
  //maxval:any=2000;

  chartOptions = {
    responsive: true
  };
 dateData=[
'08-28-2013',
'09-28-2013',
'10-28-2013',
'11-28-2013',
'12-28-2013',
'08-28-2013',
'08-28-2013',
'08-28-2013',
'08-28-2013',
'08-28-2013',
'08-28-2013',
'08-28-2013',
'08-28-2013',
'08-28-2013',
'08-28-2013',
'08-28-2013',
'08-28-2013',
'08-28-2013',
'08-28-2013',
'08-28-2013',
'08-28-2013',
'08-28-2013',
'08-28-2013',
'08-28-2013',
'08-28-2013',
'08-28-2013',
'08-28-2013',
'08-28-2013',
'08-28-2013',
'08-28-2013',
'08-28-2013',
'08-28-2013',
'08-28-2013',
'08-28-2013',
'08-28-2013',
'08-28-2013',
'08-28-2013'
];
  chartData = [
    { data: [330, 600, 260, 700], label: 'Account A' },
    { data: [120, 455, 100, 340], label: 'Account B' },
    { data: [45, 67, 800, 500], label: 'Account C' }
  ];

  chartLabels = ['January', 'February', 'Mars', 'April'];


  public currLineChartColor: Array<any> = [
{
      
     fillColor: 'rgb(4, 71, 108)',
    strokeColor: 'rgb(4, 71, 108)',
    highlightFill: 'rgb(4, 71, 108)',
    highlightStroke: 'rgb(4, 71, 108)'
}
];

  onChartClick(event) {
    console.log(event);
  }

 myOnFinish(value) {
    this.aux = value;
    this.auxRiskScoreFrom = value.from;
    this.auxRiskScoreTo = value.to;
    console.log(this.auxRiskScoreTo);
     console.log(this.auxRiskScoreFrom);
     console.log(this.value1);
     console.log(value.from_value);
     console.log(value.to_value);
  }
  

}