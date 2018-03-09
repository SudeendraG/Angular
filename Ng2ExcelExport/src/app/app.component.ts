import { ElementRef, OnInit, ViewChild } from '@angular/core';
import { PERSONS, Person } from './model';

import { Component } from '@angular/core';
import {Element} from '@angular/compiler';
import { ExcelService } from './excel.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  @ViewChild('dataTableD') tableData:Element;
  persons: Person[];
  jsondata:any[]=[];
  constructor(private excelService: ExcelService) {
    this.excelService = excelService;
   this.jsondata=  [
  {
    "AssociateName": "Aaron Gutierrez",
    "client_name": "Carefusion",
    "AccountOwner": "Lori Kugler",
    "CSA": "Ariana Velazco",
    "placement_fee": "0.00",
    "reg_payrate": 12.5,
    "ot_payrate": 18.75,
    "dt_payrate": 25,
    "reg_hours": 183
  },
    {
    "AssociateName": "Aaron Gutierrez",
    "client_name": "Carefusion",
    "AccountOwner": "Lori Kugler",
    "CSA": "Ariana Velazco",
    "placement_fee": "0.00",
    "reg_payrate": 12.5,
    "ot_payrate": 18.75,
    "dt_payrate": 25,
    "reg_hours": 184
  },
  {
    "Period": "2018-04-30-2018-05-27"
  }
];
console.log("FILTER");
  console.log(this.jsondata.find(item => item.id === 183));
  }





ngOnInit() {
this.persons = PERSONS;
//console.log(this);
  
}






  exportToExcel(event) {
    this.excelService.exportAsExcelFile(this.jsondata, 'persons');
  }
}
